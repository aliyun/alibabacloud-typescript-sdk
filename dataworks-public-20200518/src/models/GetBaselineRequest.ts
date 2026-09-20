// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBaselineRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the baseline. You can call [ListBaselines](https://help.aliyun.com/document_detail/2261507.html) to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  baselineId?: number;
  /**
   * @remarks
   * The ID of the workspace monitored by the baseline. You can call [ListBaselines](https://help.aliyun.com/document_detail/2261507.html) to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'number',
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

