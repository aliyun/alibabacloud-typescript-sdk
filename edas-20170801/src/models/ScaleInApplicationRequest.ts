// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScaleInApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. You can call the ListApplication operation to query the application ID. For more information, see [ListApplication](https://help.aliyun.com/document_detail/149390.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 3616cdca-4f92-44***********************
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the elastic compute container (ECC) that corresponds to the Elastic Compute Service (ECS) instance to be removed for the application. Separate multiple ECC IDs with commas (,). You can call the QueryApplicationStatus operation to query the ECC ID. For more information, see [QueryApplicationStatus](https://help.aliyun.com/document_detail/149394.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 7040f221-42df-48e8-9*******************
   */
  eccInfo?: string;
  /**
   * @remarks
   * Specifies whether to forcibly unpublish the application from the ECS instance. You need to set this parameter to true only if the ECS instance expires. In normal cases, you do not need to set this parameter to true.
   * 
   * @example
   * false
   */
  forceStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      eccInfo: 'EccInfo',
      forceStatus: 'ForceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      eccInfo: 'string',
      forceStatus: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

