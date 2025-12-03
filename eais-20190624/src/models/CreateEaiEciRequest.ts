// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEaiEciRequestEciContainer extends $dara.Model {
  /**
   * @example
   * 100
   */
  arg?: string;
  /**
   * @example
   * sleep
   */
  command?: string;
  /**
   * @example
   * nginx
   */
  image?: string;
  /**
   * @example
   * test1
   */
  name?: string;
  /**
   * @example
   * /mnt/eais=eais,/models=eais/models
   */
  volumes?: string;
  static names(): { [key: string]: string } {
    return {
      arg: 'Arg',
      command: 'Command',
      image: 'Image',
      name: 'Name',
      volumes: 'Volumes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arg: 'string',
      command: 'string',
      image: 'string',
      name: 'string',
      volumes: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiEciRequestEci extends $dara.Model {
  container?: CreateEaiEciRequestEciContainer;
  /**
   * @example
   * eip-uf66jeqopgqa9hdn****
   */
  eipId?: string;
  /**
   * @example
   * test-nginx
   */
  name?: string;
  /**
   * @example
   * ecs.c5.xlarge
   */
  type?: string;
  /**
   * @example
   * 00c7****-rivj.cn-hangzhou.extreme.nas.aliyuncs.com:/share
   */
  volume?: string;
  static names(): { [key: string]: string } {
    return {
      container: 'Container',
      eipId: 'EipId',
      name: 'Name',
      type: 'Type',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      container: CreateEaiEciRequestEciContainer,
      eipId: 'string',
      name: 'string',
      type: 'string',
      volume: 'string',
    };
  }

  validate() {
    if(this.container && typeof (this.container as any).validate === 'function') {
      (this.container as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiEciRequestTag extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEaiEciRequest extends $dara.Model {
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @example
   * eais-test01
   */
  eaisName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eais.ei-a6.2xlarge
   */
  eaisType?: string;
  eci?: CreateEaiEciRequestEci;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @example
   * rg-acfmvpuy4a5****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sg-uf66jeqopgqa9hdn****
   */
  securityGroupId?: string;
  tag?: CreateEaiEciRequestTag[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-uf6h3rbwbm90urjwa****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      eaisName: 'EaisName',
      eaisType: 'EaisType',
      eci: 'Eci',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      eaisName: 'string',
      eaisType: 'string',
      eci: CreateEaiEciRequestEci,
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateEaiEciRequestTag },
      vSwitchId: 'string',
    };
  }

  validate() {
    if(this.eci && typeof (this.eci as any).validate === 'function') {
      (this.eci as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

