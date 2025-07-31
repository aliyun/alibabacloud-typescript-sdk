// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataQualityTemplateRequest extends $dara.Model {
  /**
   * @example
   * USER_DEFINED:2001
   */
  id?: string;
  /**
   * @example
   * 95279527****
   */
  owner?: string;
  /**
   * @example
   * 100001
   */
  projectId?: number;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      owner: 'Owner',
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      owner: 'string',
      projectId: 'number',
      spec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

