// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListArtifactLifecycleRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic tag deletion is enabled.
   * 
   * @example
   * true
   */
  enableDeleteTag?: boolean;
  /**
   * @remarks
   * The ID of the Enterprise Edition instance.
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
   * The number of entries to return per page. The maximum value is 100. If you specify a value greater than 100, the system may return a parameter error or use a page size of 100.
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

