// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachEnsInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. Only a single ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * testInstacneId
   */
  instanceId?: string;
  /**
   * @remarks
   * The command to execute on the instance. The command must be encoded in Base64 and UTF-8.
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

