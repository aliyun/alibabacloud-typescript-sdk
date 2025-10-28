// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. You can call the ListApplication operation to query the application ID. For more information, see [ListApplication](https://help.aliyun.com/document_detail/149390.html).
   * 
   * This parameter is required.
   * 
   * @example
   * c627c157-560d*******
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the elastic compute container (ECC) that corresponds to the ECS instance on which you want to restart the application. You can call the QueryApplicationStatus operation to query the ECC ID. For more information, see [QueryApplicationStatus](https://help.aliyun.com/document_detail/149394.html).
   * 
   * *   Separate multiple ECC IDs with commas (,).
   * *   If you leave this parameter empty, the application will be restarted on all the ECS instances deployed with the application.
   * 
   * @example
   * 006c0ea5-5f8d-4398-af1e-**********
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

