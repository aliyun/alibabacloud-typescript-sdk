// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryVirtualNumberRelationRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The virtual number.
   * 
   * @example
   * 05516214****
   */
  phoneNum?: string;
  /**
   * @remarks
   * The service name. Default value: **dyvms**.
   * 
   * @example
   * dyvms
   */
  prodCode?: string;
  /**
   * @remarks
   * The qualification ID.
   * 
   * You can log on to the [Voice Messaging Service console](https://dyvms.console.aliyun.com/overview/home), choose **Qualifications\\&Communication Scripts > Qualification Management**, and then click **Details** in the Actions column to view the qualification ID.
   * 
   * @example
   * 1000000542****
   */
  qualificationId?: number;
  /**
   * @remarks
   * The city to which the virtual number belongs.
   * 
   * @example
   * hangzhou
   */
  regionNameCity?: string;
  /**
   * @remarks
   * The real number.
   * 
   * @example
   * 1705559****
   */
  relatedNum?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The route type. Valid values:
   * 
   * **0**: number location first. **1**: random.
   * 
   * @example
   * 0
   */
  routeType?: number;
  /**
   * @remarks
   * The number type. Valid values:
   * 
   * *   **1**: the number provided by a virtual network operator, in the 05710000\\*\\*\\*\\* format.
   * *   **2**: the number provided by an Internet service provider (ISP).
   * *   **3**: a 5-digit phone number that starts with 95.
   * 
   * @example
   * 1
   */
  specId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      phoneNum: 'PhoneNum',
      prodCode: 'ProdCode',
      qualificationId: 'QualificationId',
      regionNameCity: 'RegionNameCity',
      relatedNum: 'RelatedNum',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeType: 'RouteType',
      specId: 'SpecId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      phoneNum: 'string',
      prodCode: 'string',
      qualificationId: 'number',
      regionNameCity: 'string',
      relatedNum: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeType: 'number',
      specId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

