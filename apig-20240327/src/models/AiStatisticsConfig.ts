// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiStatisticsPathField } from "./AiStatisticsPathField";


export class AiStatisticsConfigPathFieldConfigs extends $dara.Model {
  /**
   * @remarks
   * The AI request log field configuration groups for the API path, passed in as a Map. The Map keys are fixed to basic and custom, and the values are arrays of log field configurations for the corresponding groups. basic indicates basic log fields, and custom indicates custom log fields. For the current API path, fieldPaths represents the complete desired state of field configurations and does not support incremental appending or diff merging.
   * 
   * If pathFieldConfigs is not passed, is null, or is an empty array, the existing log field configurations are not updated. If a non-empty array is passed, the system performs a desired state replacement based on the complete set of Paths in the request, and historical Path configurations not included in the request are deleted.
   * 
   * For example, to add a custom field test to the /v1/chat/completions API path on top of existing configurations, the caller must use a "read-merge-write back in full" approach:
   * 1. Read all current Path configurations.
   * 2. Retain the complete basic array and custom array for the target API path /v1/chat/completions.
   * 3. Append test to the current custom array.
   * 4. Keep configurations for other API paths unchanged.
   * 5. Submit the merged complete pathFieldConfigs.
   */
  fieldPaths?: { [key: string]: AiStatisticsPathField };
  /**
   * @remarks
   * The API path.
   * 
   * @example
   * /v1/chat/completions
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      fieldPaths: 'fieldPaths',
      path: 'path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldPaths: { 'type': 'map', 'keyType': 'string', 'valueType': AiStatisticsPathField },
      path: 'string',
    };
  }

  validate() {
    if(this.fieldPaths) {
      $dara.Model.validateMap(this.fieldPaths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiStatisticsConfig extends $dara.Model {
  /**
   * @remarks
   * **[Deprecated]** Specifies whether to record request content (controls whether question-related attributes are generated). This parameter is deprecated in the new version.
   * 
   * @example
   * true
   */
  logRequestContent?: boolean;
  /**
   * @remarks
   * **[Deprecated]** Specifies whether to record response content (controls whether answer-related attributes are generated). This parameter is deprecated in the new version.
   * 
   * @example
   * true
   */
  logResponseContent?: boolean;
  /**
   * @remarks
   * The list of AI request log field collection configurations, configured by API path.
   */
  pathFieldConfigs?: AiStatisticsConfigPathFieldConfigs[];
  static names(): { [key: string]: string } {
    return {
      logRequestContent: 'logRequestContent',
      logResponseContent: 'logResponseContent',
      pathFieldConfigs: 'pathFieldConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logRequestContent: 'boolean',
      logResponseContent: 'boolean',
      pathFieldConfigs: { 'type': 'array', 'itemType': AiStatisticsConfigPathFieldConfigs },
    };
  }

  validate() {
    if(Array.isArray(this.pathFieldConfigs)) {
      $dara.Model.validateArray(this.pathFieldConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

