// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListArtifactLifecycleRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether lifecycle management is enabled.
   * 
   * @example
   * true
   */
  enableDeleteTag?: boolean;
  /**
   * @remarks
   * The ID of the Enterprise instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-eztul9ucz76q****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100. If the specified value exceeds 100, the system returns a parameter error or uses 100 as the actual maximum number of entries returned.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      enableDeleteTag: 'EnableDeleteTag',
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableDeleteTag: 'boolean',
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

