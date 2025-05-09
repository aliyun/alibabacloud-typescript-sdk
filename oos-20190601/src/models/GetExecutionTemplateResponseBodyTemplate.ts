// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExecutionTemplateResponseBodyTemplate extends $dara.Model {
  /**
   * @remarks
   * The creator of the template.
   * 
   * @example
   * root(13090000)
   */
  createdBy?: string;
  /**
   * @remarks
   * The time when the template was created.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  createdDate?: string;
  /**
   * @remarks
   * The description of the template.
   * 
   * @example
   * Get status of instances
   */
  description?: string;
  /**
   * @remarks
   * The SHA-256 value of the template content.
   * 
   * @example
   * 4bc7d7a21b3e003434b9c223f6e6d2578b5ebfeb5be28c1fcf8a8a1b11907bb4
   */
  hash?: string;
  /**
   * @remarks
   * The share type of the template. The share type of a user-created template is **Private**.
   * 
   * @example
   * Private
   */
  shareType?: string;
  /**
   * @remarks
   * The tag keys and values. The number of key-value pairs ranges from 1 to 20.
   * 
   * @example
   * {"k1":"k2","k2":"v2"}
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The format of the template. The system automatically determines whether the format is JSON or YAML.
   * 
   * @example
   * JSON
   */
  templateFormat?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * t-94753d4d828d38
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * MyTemplate
   */
  templateName?: string;
  /**
   * @remarks
   * The version of the template. The name of the version consists of the letter v and a number. The number starts from 1.
   * 
   * @example
   * v1
   */
  templateVersion?: string;
  /**
   * @remarks
   * The user who last updated the template.
   * 
   * @example
   * root(13090000)
   */
  updatedBy?: string;
  /**
   * @remarks
   * The time when the template was last updated.
   * 
   * @example
   * 2019-05-16T10:26:14Z
   */
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      hash: 'Hash',
      shareType: 'ShareType',
      tags: 'Tags',
      templateFormat: 'TemplateFormat',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      hash: 'string',
      shareType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      templateFormat: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  validate() {
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

