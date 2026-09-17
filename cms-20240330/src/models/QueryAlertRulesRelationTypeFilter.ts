// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAlertRulesRelationTypeFilter extends $dara.Model {
  /**
   * @remarks
   * Matches any value in the set with OR semantics. Valid values: ALL, UMODEL_ENTITY, CLOUD_INSTANCE, GROUP_V1, GROUP_V2, and TAG.
   * 
   * @example
   * ["ALL","CLOUD_INSTANCE"]
   */
  in?: string[];
  /**
   * @remarks
   * Excludes any value in the set with NOT IN semantics.
   * 
   * @example
   * ["TAG","GROUP_V1"]
   */
  notIn?: string[];
  static names(): { [key: string]: string } {
    return {
      in: 'in',
      notIn: 'notIn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      in: { 'type': 'array', 'itemType': 'string' },
      notIn: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.in)) {
      $dara.Model.validateArray(this.in);
    }
    if(Array.isArray(this.notIn)) {
      $dara.Model.validateArray(this.notIn);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

