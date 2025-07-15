// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLiveDomainMappingRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The streaming domain. The type of the domain name is **liveVideo**.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  pullDomain?: string;
  /**
   * @remarks
   * The ingest domain. The type of the domain name is **liveEdge**.
   * 
   * This parameter is required.
   * 
   * @example
   * demo.aliyundoc.com
   */
  pushDomain?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      pullDomain: 'PullDomain',
      pushDomain: 'PushDomain',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      pullDomain: 'string',
      pushDomain: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

