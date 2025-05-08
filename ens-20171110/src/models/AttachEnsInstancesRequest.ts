// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachEnsInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance. You can specify only one instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * testInstacneId
   */
  instanceId?: string;
  /**
   * @remarks
   * The command that you want to execute on the instance. The command must be encoded in Base64 or UTF-8.
   * 
   * This parameter is required.
   * 
   * @example
   * wget d2dldCBodHRwOi8vYWxpYWNzLWs4cy1jbxxxx
   */
  scripts?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scripts: 'Scripts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scripts: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

