// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainsBySourceRequest extends $dara.Model {
  ownerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The origin servers. Separate multiple origin servers with commas (,). Fuzzy match is not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  sources?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
      sources: 'Sources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      securityToken: 'string',
      sources: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

