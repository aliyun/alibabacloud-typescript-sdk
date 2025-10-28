// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetK8sApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. You can call the ListApplication operation to query the application ID. For more information, see [ListApplication](https://help.aliyun.com/document_detail/149390.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 5a166fbd-****-4f98-a286-781659d9****
   */
  appId?: string;
  /**
   * @remarks
   * The source from which data is queried.
   * 
   * *   If you leave this parameter empty, a common query is performed.
   * *   If you set the value to deploy, you query application information from the deployment page.
   * 
   * @example
   * deploy
   */
  from?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      from: 'From',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      from: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

