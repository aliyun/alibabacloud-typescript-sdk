// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetComponentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1112312312312
   */
  componentId?: string;
  /**
   * @example
   * 10000
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      componentId: 'ComponentId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentId: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

