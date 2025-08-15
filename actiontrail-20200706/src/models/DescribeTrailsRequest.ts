// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTrailsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query the information about multi-account trails. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * false
   */
  includeOrganizationTrail?: boolean;
  /**
   * @remarks
   * Specifies whether to return the information about shadow trails. Valid values:
   * 
   * *   false: Do not return the information about shadow trails. It is the default value.
   * *   true: Return the information about shadow trails.
   * 
   * @example
   * false
   */
  includeShadowTrails?: boolean;
  /**
   * @remarks
   * The names of the trails whose information you want to query. Separate multiple trail names with commas (,).
   * 
   * @example
   * abc,def
   */
  nameList?: string;
  static names(): { [key: string]: string } {
    return {
      includeOrganizationTrail: 'IncludeOrganizationTrail',
      includeShadowTrails: 'IncludeShadowTrails',
      nameList: 'NameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeOrganizationTrail: 'boolean',
      includeShadowTrails: 'boolean',
      nameList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

