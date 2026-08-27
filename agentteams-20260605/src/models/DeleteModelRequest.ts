// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteModelRequest extends $dara.Model {
  /**
   * @remarks
   * The model ID.
   * 
   * This parameter is required.
   * 
   * @example
   * m-xxx
   */
  id?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The model provider ID.
   * 
   * @example
   * p-xxx
   */
  providerId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      instanceId: 'InstanceId',
      providerId: 'ProviderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      instanceId: 'string',
      providerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

