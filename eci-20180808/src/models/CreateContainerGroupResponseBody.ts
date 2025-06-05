// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContainerGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * eci-uf6fonnghi50u374****
   */
  containerGroupId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 89945DD3-9072-47D0-A318-353284CFC7B3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      containerGroupId: 'ContainerGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerGroupId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

