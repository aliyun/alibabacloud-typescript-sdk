// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddDcdnDomainRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of a tag. Valid values of N: **1 to 20**.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The value of a tag. Valid values of N: **1 to 20**.
   * 
   * @example
   * value
   */
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

export class AddDcdnDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The URL that is used for health checks.
   * 
   * @example
   * example.com
   */
  checkUrl?: string;
  /**
   * @remarks
   * The domain name that you want to add. You can specify only one domain name in each request.
   * 
   * Wildcard domain names are supported. A wildcard domain name must start with a period (.), such as .example.com.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * Computing service type. Valid values:
   * 
   * *   **routine**
   * *   **image**
   * *   **cloudFunction**
   * 
   * @example
   * routine
   */
  functionType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the resource group. If you do not specify a value for this parameter, the system automatically assigns the ID of the default resource group.
   * 
   * @example
   * rg-acfmyuji4b6r4**
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The Acceleration scen. Supported:
   * 
   * * apiscene:API acceleration.
   * * webservicescene: accelerate website business.
   * * staticscene: video and graphic acceleration.
   * * (Empty): no scene.
   * 
   * @example
   * apiscene
   */
  scene?: string;
  /**
   * @remarks
   * The acceleration region. Valid values:
   * 
   * *   **domestic**: Chinese mainland
   * *   **overseas**: outside the Chinese mainland
   * *   **global**: global
   * 
   * Default value: **domestic**.
   * 
   * @example
   * domestic
   */
  scope?: string;
  securityToken?: string;
  /**
   * @remarks
   * The information about the addresses of origin servers.
   * 
   * @example
   * [{"content":"10.10.10.10","type":"ipaddr","priority":"20","port":80}]
   */
  sources?: string;
  /**
   * @remarks
   * The information about the tags.
   */
  tag?: AddDcdnDomainRequestTag[];
  /**
   * @remarks
   * The top-level domain.
   * 
   * @example
   * yourTopLevelDomain
   */
  topLevelDomain?: string;
  static names(): { [key: string]: string } {
    return {
      checkUrl: 'CheckUrl',
      domainName: 'DomainName',
      functionType: 'FunctionType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      scene: 'Scene',
      scope: 'Scope',
      securityToken: 'SecurityToken',
      sources: 'Sources',
      tag: 'Tag',
      topLevelDomain: 'TopLevelDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkUrl: 'string',
      domainName: 'string',
      functionType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      scene: 'string',
      scope: 'string',
      securityToken: 'string',
      sources: 'string',
      tag: { 'type': 'array', 'itemType': AddDcdnDomainRequestTag },
      topLevelDomain: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

