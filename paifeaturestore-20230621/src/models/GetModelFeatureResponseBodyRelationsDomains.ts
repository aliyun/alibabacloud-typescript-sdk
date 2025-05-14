// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModelFeatureResponseBodyRelationsDomains extends $dara.Model {
  /**
   * @example
   * FeatureEntity
   */
  domainType?: string;
  /**
   * @remarks
   * Domain ID。
   * 
   * @example
   * 3
   */
  id?: string;
  /**
   * @example
   * feature_entity_1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      domainType: 'DomainType',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainType: 'string',
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

