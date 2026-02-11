// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlertTemplateRequest extends $dara.Model {
  annotations?: string;
  labels?: string;
  matchExpressions?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  message?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  parentId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  rule?: string;
  templateProvider?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      annotations: 'Annotations',
      labels: 'Labels',
      matchExpressions: 'MatchExpressions',
      message: 'Message',
      name: 'Name',
      parentId: 'ParentId',
      regionId: 'RegionId',
      rule: 'Rule',
      templateProvider: 'TemplateProvider',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: 'string',
      labels: 'string',
      matchExpressions: 'string',
      message: 'string',
      name: 'string',
      parentId: 'string',
      regionId: 'string',
      rule: 'string',
      templateProvider: 'string',
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

