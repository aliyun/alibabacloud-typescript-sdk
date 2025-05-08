// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNacosConfigResponseBodyConfigurationGrayVersions extends $dara.Model {
  /**
   * @remarks
   * Gray version name
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The priority of the current gray rule.
   * 
   * @example
   * 20
   */
  priority?: number;
  /**
   * @remarks
   * Rules of the current gray version
   * 
   * @example
   * a=b
   */
  rule?: string;
  /**
   * @remarks
   * Gray type
   * 
   * @example
   * Beta
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      priority: 'Priority',
      rule: 'Rule',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      priority: 'number',
      rule: 'string',
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

