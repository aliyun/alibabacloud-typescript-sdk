// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSystemPropertyTemplatesRequest extends $dara.Model {
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6k****
   */
  nextToken?: string;
  templateIds?: string[];
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      templateIds: 'TemplateIds',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      templateIds: { 'type': 'array', 'itemType': 'string' },
      templateName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.templateIds)) {
      $dara.Model.validateArray(this.templateIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

