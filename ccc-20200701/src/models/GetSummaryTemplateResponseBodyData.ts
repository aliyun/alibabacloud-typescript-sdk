// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSummaryTemplateResponseBodyDataPropertyList } from "./GetSummaryTemplateResponseBodyDataPropertyList";


export class GetSummaryTemplateResponseBodyData extends $dara.Model {
  /**
   * @example
   * 8939-4223-86d0-6bd187905cc8
   */
  categoryId?: string;
  /**
   * @example
   * editor-xxx@ccc-test
   */
  editor?: string;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  name?: string;
  propertyList?: GetSummaryTemplateResponseBodyDataPropertyList[];
  /**
   * @example
   * Enabled
   */
  state?: string;
  /**
   * @example
   * 43c2671b-8939-4223-86d0-6bd187905cc8_1717664210492
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      editor: 'Editor',
      instanceId: 'InstanceId',
      name: 'Name',
      propertyList: 'PropertyList',
      state: 'State',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      editor: 'string',
      instanceId: 'string',
      name: 'string',
      propertyList: { 'type': 'array', 'itemType': GetSummaryTemplateResponseBodyDataPropertyList },
      state: 'string',
      templateId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.propertyList)) {
      $dara.Model.validateArray(this.propertyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

