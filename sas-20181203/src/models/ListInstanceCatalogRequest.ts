// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceCatalogRequest extends $dara.Model {
  /**
   * @remarks
   * The language type of the request and response messages. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether to filter assets that support custom checks. Valid values:
   * 
   * - **true**: Filters assets that support custom checks.
   * - **false**: All check assets. This is the default value.
   * 
   * @example
   * true
   */
  onlyCustom?: boolean;
  /**
   * @remarks
   * The ID of the region where the instance to be queried is located. Valid values:
   * 
   * - **cn-hangzhou**: Center.
   * - **ap-southeast-1**: Singapore.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of requirement IDs.
   */
  requirementIds?: number[];
  /**
   * @remarks
   * The list of standard IDs.
   */
  standardIds?: number[];
  /**
   * @remarks
   * The list of task sources.
   */
  taskSources?: string[];
  /**
   * @remarks
   * The list of types to which the check standards belong.
   */
  types?: string[];
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      onlyCustom: 'OnlyCustom',
      regionId: 'RegionId',
      requirementIds: 'RequirementIds',
      standardIds: 'StandardIds',
      taskSources: 'TaskSources',
      types: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      onlyCustom: 'boolean',
      regionId: 'string',
      requirementIds: { 'type': 'array', 'itemType': 'number' },
      standardIds: { 'type': 'array', 'itemType': 'number' },
      taskSources: { 'type': 'array', 'itemType': 'string' },
      types: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.requirementIds)) {
      $dara.Model.validateArray(this.requirementIds);
    }
    if(Array.isArray(this.standardIds)) {
      $dara.Model.validateArray(this.standardIds);
    }
    if(Array.isArray(this.taskSources)) {
      $dara.Model.validateArray(this.taskSources);
    }
    if(Array.isArray(this.types)) {
      $dara.Model.validateArray(this.types);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

