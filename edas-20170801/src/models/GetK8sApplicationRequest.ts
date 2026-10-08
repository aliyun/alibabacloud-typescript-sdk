// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetK8sApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. You can call the [ListApplication](https://help.aliyun.com/document_detail/149390.html) operation to obtain the application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 5a166fbd-****-4f98-a286-781659d9****
   */
  appId?: string;
  /**
   * @remarks
   * The source of the query.
   * 
   * - If this parameter is empty, a regular query is performed.
   * 
   * - deploy: The query is initiated from the deployment page.
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

