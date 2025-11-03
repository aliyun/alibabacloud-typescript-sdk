// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceCatalogRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether to filter the assets that support custom checks. Valid values:
   * 
   * *   **true**: Filter assets that support custom checks.
   * *   **false**: All assets are selected. This is the default value.
   * 
   * @example
   * true
   */
  onlyCustom?: boolean;
  /**
   * @remarks
   * The ID of the region in which the asset resides. Valid values:
   * 
   * *   **cn-hangzhou**: International
   * *   **ap-southeast-1**: Singapore
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of requirement items.
   */
  requirementIds?: number[];
  /**
   * @remarks
   * The IDs of standards.
   */
  standardIds?: number[];
  /**
   * @remarks
   * List of task sources.
   */
  taskSources?: string[];
  /**
   * @remarks
   * The types of check standards.
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

