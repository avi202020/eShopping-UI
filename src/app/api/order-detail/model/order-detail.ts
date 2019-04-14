import {OrderStatus} from './order-status';
import {UserProfile} from '../../../account/user-profile/model/user-profile';
import {Address} from '../../address/model/address';
import {Product} from '../../product/model/product';

export class OrderDetail
{
  id: number;
  orderStatus: OrderStatus;
  purchasedBy: UserProfile;
  shippingAddress: Address;
  product: Product;
  orderCreatedDateTime: string;
}
