// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportKMSSecretsForHostRequestSecrets extends $dara.Model {
  /**
   * @example
   * secret
   */
  secretName?: string;
  /**
   * @example
   * ECS
   */
  secretType?: string;
  static names(): { [key: string]: string } {
    return {
      secretName: 'SecretName',
      secretType: 'SecretType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretName: 'string',
      secretType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportKMSSecretsForHostRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  hostId?: number;
  /**
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  secrets?: ImportKMSSecretsForHostRequestSecrets[];
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      secrets: 'Secrets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'number',
      instanceId: 'string',
      regionId: 'string',
      secrets: { 'type': 'array', 'itemType': ImportKMSSecretsForHostRequestSecrets },
    };
  }

  validate() {
    if(Array.isArray(this.secrets)) {
      $dara.Model.validateArray(this.secrets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

