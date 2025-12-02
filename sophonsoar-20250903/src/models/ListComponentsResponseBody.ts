// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComponentsResponseBodyComponentsComponentActionsInputConfigs extends $dara.Model {
  /**
   * @remarks
   * Default value.
   * 
   * @example
   * 1
   */
  defaultValue?: string;
  /**
   * @remarks
   * Field description information.
   * 
   * @example
   * Project Name
   */
  fieldDescription?: string;
  /**
   * @remarks
   * Field display configuration.
   * 
   * @example
   * {
   *     "height": 200,
   *     "theme": "vs-light",
   *     "language": "markdown",
   *     "editorOptions": {}
   * }
   */
  fieldDisplayConfig?: string;
  /**
   * @remarks
   * Field name.
   * 
   * @example
   * Project
   */
  fieldName?: string;
  /**
   * @remarks
   * Field type, with the following values:
   * 
   * - **String**: String.
   * - **Long**: Long integer.
   * - **Integer**: Integer.
   * - **Double**: Double.
   * - **Boolean**: Boolean.
   * - **Complex**: Key-value pair.
   * 
   * @example
   * String
   */
  fieldType?: string;
  /**
   * @remarks
   * Whether this parameter is required.
   * 
   * - **true**: Required.
   * - **false**: Not required.
   * 
   * @example
   * false
   */
  required?: boolean;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      fieldDescription: 'FieldDescription',
      fieldDisplayConfig: 'FieldDisplayConfig',
      fieldName: 'FieldName',
      fieldType: 'FieldType',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      fieldDescription: 'string',
      fieldDisplayConfig: 'string',
      fieldName: 'string',
      fieldType: 'string',
      required: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponseBodyComponentsComponentActionsOutputConfigs extends $dara.Model {
  /**
   * @remarks
   * Field name.
   * 
   * @example
   * lh_source
   */
  fieldName?: string;
  /**
   * @remarks
   * Field type, with the following values:
   * 
   * - **String**: String.
   * - **Long**: Long integer.
   * - **Integer**: Integer.
   * - **Double**: Double.
   * - **Boolean**: Boolean.
   * - **Complex**: Key-value pair.
   * 
   * @example
   * String
   */
  fieldType?: string;
  static names(): { [key: string]: string } {
    return {
      fieldName: 'FieldName',
      fieldType: 'FieldType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldName: 'string',
      fieldType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponseBodyComponentsComponentActions extends $dara.Model {
  /**
   * @remarks
   * The description of the component action name.
   * 
   * @example
   * Query logs from SLS
   */
  componentActionDescription?: string;
  /**
   * @remarks
   * The name of the component action.
   * 
   * @example
   * QueryLogs
   */
  componentActionName?: string;
  /**
   * @remarks
   * Configuration of input parameters for the action.
   */
  inputConfigs?: ListComponentsResponseBodyComponentsComponentActionsInputConfigs[];
  /**
   * @remarks
   * Action output parameter configuration.
   */
  outputConfigs?: ListComponentsResponseBodyComponentsComponentActionsOutputConfigs[];
  static names(): { [key: string]: string } {
    return {
      componentActionDescription: 'ComponentActionDescription',
      componentActionName: 'ComponentActionName',
      inputConfigs: 'InputConfigs',
      outputConfigs: 'OutputConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentActionDescription: 'string',
      componentActionName: 'string',
      inputConfigs: { 'type': 'array', 'itemType': ListComponentsResponseBodyComponentsComponentActionsInputConfigs },
      outputConfigs: { 'type': 'array', 'itemType': ListComponentsResponseBodyComponentsComponentActionsOutputConfigs },
    };
  }

  validate() {
    if(Array.isArray(this.inputConfigs)) {
      $dara.Model.validateArray(this.inputConfigs);
    }
    if(Array.isArray(this.outputConfigs)) {
      $dara.Model.validateArray(this.outputConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponseBodyComponentsComponentAssetConfigs extends $dara.Model {
  /**
   * @remarks
   * Default value.
   * 
   * @example
   * 1
   */
  defaultValue?: string;
  /**
   * @remarks
   * Whether the field value needs to be encrypted. The range of values is as follows:
   * 
   * - true: Encrypted.
   * - false: Not encrypted.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @remarks
   * Description of the field.
   * 
   * @example
   * project name
   */
  fieldDescription?: string;
  /**
   * @remarks
   * Field name.
   * 
   * @example
   * project
   */
  fieldName?: string;
  /**
   * @remarks
   * Field type, with the following values:
   * 
   * - **String**: String.
   * - **Long**: Long integer.
   * - **Integer**: Integer.
   * - **Double**: Double.
   * - **Boolean**: Boolean.
   * - **Complex**: Key-value pair.
   * 
   * @example
   * String
   */
  fieldType?: string;
  /**
   * @remarks
   * Whether this parameter is required.
   * 
   * - **true**: Required.
   * - **false**: Not required.
   * 
   * @example
   * false
   */
  required?: boolean;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      encrypted: 'Encrypted',
      fieldDescription: 'FieldDescription',
      fieldName: 'FieldName',
      fieldType: 'FieldType',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      encrypted: 'boolean',
      fieldDescription: 'string',
      fieldName: 'string',
      fieldType: 'string',
      required: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponseBodyComponents extends $dara.Model {
  /**
   * @remarks
   * List of component actions.
   */
  componentActions?: ListComponentsResponseBodyComponentsComponentActions[];
  /**
   * @remarks
   * The alias of the component.
   * 
   * @example
   * Log
   */
  componentAlias?: string;
  /**
   * @remarks
   * List of asset field configurations.
   */
  componentAssetConfigs?: ListComponentsResponseBodyComponentsComponentAssetConfigs[];
  /**
   * @remarks
   * The description of the component.
   * 
   * @example
   * Log query
   */
  componentDescription?: string;
  /**
   * @remarks
   * Extended information of the component.
   * 
   * @example
   * {"type":"common"}
   */
  componentExtension?: string;
  /**
   * @remarks
   * The icon URL of the component.
   * 
   * @example
   * https://img.alicdn.com/imgextra/i1/O1CN01qBUIqk22YyEBQDsha_!!6000000007133-55-tps-200-200.svg
   */
  componentLogo?: string;
  /**
   * @remarks
   * The name of the component.
   * 
   * @example
   * SLS
   */
  componentName?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 1757902337000
   */
  createTime?: number;
  /**
   * @remarks
   * Update time.
   * 
   * @example
   * 1757902337000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      componentActions: 'ComponentActions',
      componentAlias: 'ComponentAlias',
      componentAssetConfigs: 'ComponentAssetConfigs',
      componentDescription: 'ComponentDescription',
      componentExtension: 'ComponentExtension',
      componentLogo: 'ComponentLogo',
      componentName: 'ComponentName',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentActions: { 'type': 'array', 'itemType': ListComponentsResponseBodyComponentsComponentActions },
      componentAlias: 'string',
      componentAssetConfigs: { 'type': 'array', 'itemType': ListComponentsResponseBodyComponentsComponentAssetConfigs },
      componentDescription: 'string',
      componentExtension: 'string',
      componentLogo: 'string',
      componentName: 'string',
      createTime: 'number',
      updateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.componentActions)) {
      $dara.Model.validateArray(this.componentActions);
    }
    if(Array.isArray(this.componentAssetConfigs)) {
      $dara.Model.validateArray(this.componentAssetConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of components.
   */
  components?: ListComponentsResponseBodyComponents[];
  /**
   * @remarks
   * Maximum number of results returned in a single request. Range: 1~100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Token for the start of the next query.
   * 
   * @example
   * 7fbb1c66d607c1f79a740f039a8dcfda
   */
  nextToken?: string;
  /**
   * @remarks
   * Page number for pagination, with a default value of 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of items per page for pagination. Range: 1~100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique identifier generated by Alibaba Cloud for this request, which can be used for troubleshooting and problem localization.
   * 
   * @example
   * 0727DAC8-****-51EC-****-14999C62B502
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of items found.
   * 
   * @example
   * 52
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      components: 'Components',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      components: { 'type': 'array', 'itemType': ListComponentsResponseBodyComponents },
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

