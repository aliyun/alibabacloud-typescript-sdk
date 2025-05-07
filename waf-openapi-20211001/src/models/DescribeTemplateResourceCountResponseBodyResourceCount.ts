// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTemplateResourceCountResponseBodyResourceCount extends $dara.Model {
  /**
   * @remarks
   * The number of protected object groups.
   * 
   * @example
   * 30
   */
  groupCount?: number;
  /**
   * @remarks
   * The number of protected objects.
   * 
   * @example
   * 30
   */
  singleCount?: number;
  /**
   * @remarks
   * The ID of the protection template.
   * 
   * @example
   * 12345
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      groupCount: 'GroupCount',
      singleCount: 'SingleCount',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupCount: 'number',
      singleCount: 'number',
      templateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

