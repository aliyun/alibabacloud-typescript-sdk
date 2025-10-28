// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteK8sServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * 5a166fbd***a286-781659d9f54c
   */
  appId?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * This parameter is required.
   * 
   * @example
   * service-http
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

