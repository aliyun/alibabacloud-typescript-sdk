// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. You can call the ListApplication operation to query the application ID. For more information, see [ListApplication](https://help.aliyun.com/document_detail/149390.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 3616cdca-4f92-4413**********
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the elastic compute container (ECC) that corresponds to the Elastic Compute Service (ECS) instance on which you want to start the application. Separate multiple ECC IDs with commas (,). You can call the QueryApplicationStatus operation to query the ECC ID. For more information, see [QueryApplicationStatus](https://help.aliyun.com/document_detail/149394.html).
   * 
   * @example
   * ""
   */
  eccInfo?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      eccInfo: 'EccInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      eccInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

