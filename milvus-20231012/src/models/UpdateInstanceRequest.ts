// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceRequestComponents extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8
   */
  cuNum?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  replica?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * standalone
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cuNum: 'cuNum',
      replica: 'replica',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cuNum: 'number',
      replica: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequest extends $dara.Model {
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * true
   */
  autoBackup?: boolean;
  components?: UpdateInstanceRequestComponents[];
  /**
   * @example
   * rootCoord:\\n  maxDatabaseNum: 64
   */
  configuration?: string;
  /**
   * @example
   * true
   */
  ha?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c-xxxx
   */
  instanceId?: string;
  /**
   * @example
   * milvus-test
   */
  instanceName?: string;
  /**
   * @example
   * xxx
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      autoBackup: 'autoBackup',
      components: 'components',
      configuration: 'configuration',
      ha: 'ha',
      instanceId: 'instanceId',
      instanceName: 'instanceName',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      autoBackup: 'boolean',
      components: { 'type': 'array', 'itemType': UpdateInstanceRequestComponents },
      configuration: 'string',
      ha: 'boolean',
      instanceId: 'string',
      instanceName: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

