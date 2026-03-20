// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TemplateVariable } from "./TemplateVariable";


export class BroadcastTemplate extends $dara.Model {
  /**
   * @example
   * 2025-11-28T10:11:28
   */
  createTime?: string;
  /**
   * @example
   * BS1b2WNnRMu4ouRzT4clY9Jhg
   */
  id?: string;
  /**
   * @example
   * 2025-11-28T11:11:28
   */
  modifiedTime?: string;
  name?: string;
  variables?: TemplateVariable[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      id: 'id',
      modifiedTime: 'modifiedTime',
      name: 'name',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      id: 'string',
      modifiedTime: 'string',
      name: 'string',
      variables: { 'type': 'array', 'itemType': TemplateVariable },
    };
  }

  validate() {
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

