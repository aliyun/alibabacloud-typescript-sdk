// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModelingProjectDetailRequest extends $dara.Model {
  /**
   * @remarks
   * Project ID.
   * 
   * @example
   * 01
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

