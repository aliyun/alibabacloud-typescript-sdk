// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListArtifactLifecycleRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable lifecycle management for the artifact.
   * 
   * @example
   * true
   */
  enableDeleteTag?: boolean;
  /**
   * @remarks
   * The ID of the Container Registry Enterprise Edition instance.
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
   * The number of entries per page. Maximum value: 100. If you specify a value greater than 100 for this parameter, the system reports a parameter error or uses 100 as the maximum value.
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

