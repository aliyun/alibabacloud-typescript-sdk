// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("lhm", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Creates or updates the table-level configuration of a data validation task to specify the tables to validate, the validation scope, and the comparison rules.
   * 
   * @remarks
   * ## Operation description
   * Saves the table-level configuration for a specified data validation task. Use this operation to specify the source and target tables for comparison, the comparison scope (columns, partitions, filter conditions, and grouping), and the data volume comparison threshold.
   * This operation handles both creating new configurations and updating existing ones. After a validation task is created, you must call this operation to write the table-level configuration before the task has any objects to compare and before validation can be triggered.
   * ## Request description
   * - `taskId` is required. It specifies the ID of the validation task to which the configuration belongs. Obtain this value from the response of the operation that creates a data validation task.
   * - The source and target table names, columns, partitions, WHERE conditions, GROUP conditions, and hints are provided in pairs to map a source table to a target table and define the rows and columns to compare. You can specify multiple columns separated by commas (,).
   * - `isFullTableCount` determines the comparison granularity: `0` indicates partition-level comparison, and `1` indicates full-table comparison.
   * - `totalCountThreshold` specifies the total data volume comparison threshold, which determines whether the data volume difference between the source and target is within an acceptable range.
   * - When the task creation mode is batch creation in the same pattern (`taskMode=1`), you can submit multiple table configurations at a time by using `taskConfigInfo`. Separate multiple configurations with a line break (`\\n`).
   * ## Response description
   * The response returns a single value. `data` contains the configuration ID saved in this operation. You can use this ID to query or delete the table-level configuration later.
   * If `success` is `false`, use `errCode` and `errMessage` to identify the cause of the failure. Use `requestId` to troubleshoot the call.
   * 
   * @param request - AddDataCheckConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDataCheckConfigResponse
   */
  async addDataCheckConfigWithOptions(request: $_model.AddDataCheckConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddDataCheckConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isFullTableCount)) {
      body["isFullTableCount"] = request.isFullTableCount;
    }

    if (!$dara.isNull(request.sourceColumns)) {
      body["sourceColumns"] = request.sourceColumns;
    }

    if (!$dara.isNull(request.sourceGroupClause)) {
      body["sourceGroupClause"] = request.sourceGroupClause;
    }

    if (!$dara.isNull(request.sourceHint)) {
      body["sourceHint"] = request.sourceHint;
    }

    if (!$dara.isNull(request.sourcePartition)) {
      body["sourcePartition"] = request.sourcePartition;
    }

    if (!$dara.isNull(request.sourceTable)) {
      body["sourceTable"] = request.sourceTable;
    }

    if (!$dara.isNull(request.sourceWhereClause)) {
      body["sourceWhereClause"] = request.sourceWhereClause;
    }

    if (!$dara.isNull(request.targetColumns)) {
      body["targetColumns"] = request.targetColumns;
    }

    if (!$dara.isNull(request.targetGroupClause)) {
      body["targetGroupClause"] = request.targetGroupClause;
    }

    if (!$dara.isNull(request.targetHint)) {
      body["targetHint"] = request.targetHint;
    }

    if (!$dara.isNull(request.targetPartition)) {
      body["targetPartition"] = request.targetPartition;
    }

    if (!$dara.isNull(request.targetTable)) {
      body["targetTable"] = request.targetTable;
    }

    if (!$dara.isNull(request.targetWhereClause)) {
      body["targetWhereClause"] = request.targetWhereClause;
    }

    if (!$dara.isNull(request.taskConfigInfo)) {
      body["taskConfigInfo"] = request.taskConfigInfo;
    }

    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    if (!$dara.isNull(request.totalCountThreshold)) {
      body["totalCountThreshold"] = request.totalCountThreshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDataCheckConfig",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/dataCheck/config/v3/saveConfig`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddDataCheckConfigResponse>(await this.callApi(params, req, runtime), new $_model.AddDataCheckConfigResponse({}));
  }

  /**
   * Creates or updates the table-level configuration of a data validation task to specify the tables to validate, the validation scope, and the comparison rules.
   * 
   * @remarks
   * ## Operation description
   * Saves the table-level configuration for a specified data validation task. Use this operation to specify the source and target tables for comparison, the comparison scope (columns, partitions, filter conditions, and grouping), and the data volume comparison threshold.
   * This operation handles both creating new configurations and updating existing ones. After a validation task is created, you must call this operation to write the table-level configuration before the task has any objects to compare and before validation can be triggered.
   * ## Request description
   * - `taskId` is required. It specifies the ID of the validation task to which the configuration belongs. Obtain this value from the response of the operation that creates a data validation task.
   * - The source and target table names, columns, partitions, WHERE conditions, GROUP conditions, and hints are provided in pairs to map a source table to a target table and define the rows and columns to compare. You can specify multiple columns separated by commas (,).
   * - `isFullTableCount` determines the comparison granularity: `0` indicates partition-level comparison, and `1` indicates full-table comparison.
   * - `totalCountThreshold` specifies the total data volume comparison threshold, which determines whether the data volume difference between the source and target is within an acceptable range.
   * - When the task creation mode is batch creation in the same pattern (`taskMode=1`), you can submit multiple table configurations at a time by using `taskConfigInfo`. Separate multiple configurations with a line break (`\\n`).
   * ## Response description
   * The response returns a single value. `data` contains the configuration ID saved in this operation. You can use this ID to query or delete the table-level configuration later.
   * If `success` is `false`, use `errCode` and `errMessage` to identify the cause of the failure. Use `requestId` to troubleshoot the call.
   * 
   * @param request - AddDataCheckConfigRequest
   * @returns AddDataCheckConfigResponse
   */
  async addDataCheckConfig(request: $_model.AddDataCheckConfigRequest): Promise<$_model.AddDataCheckConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addDataCheckConfigWithOptions(request, headers, runtime);
  }

  /**
   * Creates a data validation task with specified source and destination data sources, validation type, and scheduling mode.
   * 
   * @remarks
   * ## Operation description
   * Creates a data validation task that establishes a data consistency verification scheduling unit between a source data source and a destination data source.
   * The task itself only describes which two data sources to verify and which verification method to use. The specific tables to verify are determined by the table detail configuration. Therefore, after creating a task, you must save the table detail configuration for the task and then trigger the verification to execute.
   * ## Request description
   * - `taskName`, `checkType`, `taskMode`, and the data source IDs and types for both the source and destination are required. The task name supports only Chinese characters, English characters, and digits.
   * - `checkType` specifies the validation method: `0`: data volume comparison. `1`: metric comparison. `2`: weak content comparison.
   * - `taskMode` specifies how the table detail configuration is created: `0`: table-by-table fine-grained creation. `1`: batch creation with the same schema. When batch creation is selected, you can submit multiple table configurations at a time when saving the table detail configuration.
   * - `srcDsId`/`srcDsType` and `dstDsId`/`dstDsType` specify the source and destination data sources respectively. The values are the IDs and types of existing data sources. `srcDsName`/`dstDsName` are the corresponding data source names.
   * - `checkTemplateId` references an existing validation template. If not specified, the built-in default template is used.
   * ## Response description
   * Returns a single-value response. `data` is create task ID of the newly created task. Use this ID for subsequent operations such as configuring table details, executing validations, querying create task list, or deleting create task.
   * When `success` is `false`, use `errCode` and `errMessage` to identify the cause of the failure.
   * 
   * @param request - AddDataCheckTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDataCheckTaskResponse
   */
  async addDataCheckTaskWithOptions(request: $_model.AddDataCheckTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddDataCheckTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.checkTemplateId)) {
      body["checkTemplateId"] = request.checkTemplateId;
    }

    if (!$dara.isNull(request.checkType)) {
      body["checkType"] = request.checkType;
    }

    if (!$dara.isNull(request.dstDsId)) {
      body["dstDsId"] = request.dstDsId;
    }

    if (!$dara.isNull(request.dstDsName)) {
      body["dstDsName"] = request.dstDsName;
    }

    if (!$dara.isNull(request.dstDsType)) {
      body["dstDsType"] = request.dstDsType;
    }

    if (!$dara.isNull(request.srcDsId)) {
      body["srcDsId"] = request.srcDsId;
    }

    if (!$dara.isNull(request.srcDsName)) {
      body["srcDsName"] = request.srcDsName;
    }

    if (!$dara.isNull(request.srcDsType)) {
      body["srcDsType"] = request.srcDsType;
    }

    if (!$dara.isNull(request.taskMode)) {
      body["taskMode"] = request.taskMode;
    }

    if (!$dara.isNull(request.taskName)) {
      body["taskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDataCheckTask",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/dataCheck/task/v3/add`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddDataCheckTaskResponse>(await this.callApi(params, req, runtime), new $_model.AddDataCheckTaskResponse({}));
  }

  /**
   * Creates a data validation task with specified source and destination data sources, validation type, and scheduling mode.
   * 
   * @remarks
   * ## Operation description
   * Creates a data validation task that establishes a data consistency verification scheduling unit between a source data source and a destination data source.
   * The task itself only describes which two data sources to verify and which verification method to use. The specific tables to verify are determined by the table detail configuration. Therefore, after creating a task, you must save the table detail configuration for the task and then trigger the verification to execute.
   * ## Request description
   * - `taskName`, `checkType`, `taskMode`, and the data source IDs and types for both the source and destination are required. The task name supports only Chinese characters, English characters, and digits.
   * - `checkType` specifies the validation method: `0`: data volume comparison. `1`: metric comparison. `2`: weak content comparison.
   * - `taskMode` specifies how the table detail configuration is created: `0`: table-by-table fine-grained creation. `1`: batch creation with the same schema. When batch creation is selected, you can submit multiple table configurations at a time when saving the table detail configuration.
   * - `srcDsId`/`srcDsType` and `dstDsId`/`dstDsType` specify the source and destination data sources respectively. The values are the IDs and types of existing data sources. `srcDsName`/`dstDsName` are the corresponding data source names.
   * - `checkTemplateId` references an existing validation template. If not specified, the built-in default template is used.
   * ## Response description
   * Returns a single-value response. `data` is create task ID of the newly created task. Use this ID for subsequent operations such as configuring table details, executing validations, querying create task list, or deleting create task.
   * When `success` is `false`, use `errCode` and `errMessage` to identify the cause of the failure.
   * 
   * @param request - AddDataCheckTaskRequest
   * @returns AddDataCheckTaskResponse
   */
  async addDataCheckTask(request: $_model.AddDataCheckTaskRequest): Promise<$_model.AddDataCheckTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addDataCheckTaskWithOptions(request, headers, runtime);
  }

  /**
   * Creates a data validation template that defines reusable comparison rules, which can be referenced by data validation nodes through the template ID.
   * 
   * @remarks
   * ## Operation description
   * Creates a reusable data validation template. This operation allows you to define a set of comparison rules, including metric calculation methods, difference tolerance rates, sampling policies, and null value and precision handling policies. Validation nodes can reference the template by template ID, which eliminates the need to repeatedly configure rules for each node.
   * ## Request description
   * - `templateName` specifies the template name, and `templateDesc` specifies the template description.
   * - `checkType` specifies the comparison type that the template applies to. Valid values: `0` (data volume comparison), `1` (metric comparison), `2` (weak content comparison), `3` (custom comparison), `4` (full-text comparison), and `5` (null rate comparison). Different values correspond to different rule fields. Specify only the rule fields that match the selected type.
   * - For metric comparison (`checkType=1`), use `basicMetricRules` and `metricRules` to describe the metric calculation methods (such as SUM, AVG, MIN, and MAX) and difference tolerance rates for each data type. If `diffTolerateType` is set to `0` (unified), specify only one value for `diffTolerateValues`. If `diffTolerateType` is set to `1` (custom), specify a value for each metric.
   * - For weak content comparison (`checkType=2`), use `weakContentRule` to specify the weak content algorithm (such as `md5` or `crc32`), the field type filter conditions, and the field name expressions for the fields that participate in the verification.
   * - For null rate comparison (`checkType=5`), use `nullRules` to configure null values grouped by data type.
   * - Row-by-row and column-by-column comparison strategies are controlled by fields with the `column` prefix, including whether to enable sampling, the sampling method (by row or by percentage) and values, the size comparison type, whether to enable cosine similarity, and whether to ignore differences between null values and 0 values.
   * - `dsEngineRels` declares the data source engines associated with the template, including the data source engine configuration ID, the data source type, and the list of verification engine types covered.
   * ## Response description
   * The response returns a single value. `data` is the template ID (UUID character string) of the template you create. Reference this ID by using `checkTemplateId` when you create a validation node.
   * If `success` is `false`, use `errCode` and `errMessage` to identify the cause of the failed request.
   * 
   * @param request - AddDataCheckTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDataCheckTemplateResponse
   */
  async addDataCheckTemplateWithOptions(request: $_model.AddDataCheckTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddDataCheckTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.basicMetricRules)) {
      body["basicMetricRules"] = request.basicMetricRules;
    }

    if (!$dara.isNull(request.checkType)) {
      body["checkType"] = request.checkType;
    }

    if (!$dara.isNull(request.complexMetricRules)) {
      body["complexMetricRules"] = request.complexMetricRules;
    }

    if (!$dara.isNull(request.dsEngineRels)) {
      body["dsEngineRels"] = request.dsEngineRels;
    }

    if (!$dara.isNull(request.fulltextRule)) {
      body["fulltextRule"] = request.fulltextRule;
    }

    if (!$dara.isNull(request.metricRules)) {
      body["metricRules"] = request.metricRules;
    }

    if (!$dara.isNull(request.nullRules)) {
      body["nullRules"] = request.nullRules;
    }

    if (!$dara.isNull(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    if (!$dara.isNull(request.templateDesc)) {
      body["templateDesc"] = request.templateDesc;
    }

    if (!$dara.isNull(request.templateName)) {
      body["templateName"] = request.templateName;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["tenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.weakContentRule)) {
      body["weakContentRule"] = request.weakContentRule;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDataCheckTemplate",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/dataCheck/template/v3/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddDataCheckTemplateResponse>(await this.callApi(params, req, runtime), new $_model.AddDataCheckTemplateResponse({}));
  }

  /**
   * Creates a data validation template that defines reusable comparison rules, which can be referenced by data validation nodes through the template ID.
   * 
   * @remarks
   * ## Operation description
   * Creates a reusable data validation template. This operation allows you to define a set of comparison rules, including metric calculation methods, difference tolerance rates, sampling policies, and null value and precision handling policies. Validation nodes can reference the template by template ID, which eliminates the need to repeatedly configure rules for each node.
   * ## Request description
   * - `templateName` specifies the template name, and `templateDesc` specifies the template description.
   * - `checkType` specifies the comparison type that the template applies to. Valid values: `0` (data volume comparison), `1` (metric comparison), `2` (weak content comparison), `3` (custom comparison), `4` (full-text comparison), and `5` (null rate comparison). Different values correspond to different rule fields. Specify only the rule fields that match the selected type.
   * - For metric comparison (`checkType=1`), use `basicMetricRules` and `metricRules` to describe the metric calculation methods (such as SUM, AVG, MIN, and MAX) and difference tolerance rates for each data type. If `diffTolerateType` is set to `0` (unified), specify only one value for `diffTolerateValues`. If `diffTolerateType` is set to `1` (custom), specify a value for each metric.
   * - For weak content comparison (`checkType=2`), use `weakContentRule` to specify the weak content algorithm (such as `md5` or `crc32`), the field type filter conditions, and the field name expressions for the fields that participate in the verification.
   * - For null rate comparison (`checkType=5`), use `nullRules` to configure null values grouped by data type.
   * - Row-by-row and column-by-column comparison strategies are controlled by fields with the `column` prefix, including whether to enable sampling, the sampling method (by row or by percentage) and values, the size comparison type, whether to enable cosine similarity, and whether to ignore differences between null values and 0 values.
   * - `dsEngineRels` declares the data source engines associated with the template, including the data source engine configuration ID, the data source type, and the list of verification engine types covered.
   * ## Response description
   * The response returns a single value. `data` is the template ID (UUID character string) of the template you create. Reference this ID by using `checkTemplateId` when you create a validation node.
   * If `success` is `false`, use `errCode` and `errMessage` to identify the cause of the failed request.
   * 
   * @param request - AddDataCheckTemplateRequest
   * @returns AddDataCheckTemplateResponse
   */
  async addDataCheckTemplate(request: $_model.AddDataCheckTemplateRequest): Promise<$_model.AddDataCheckTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addDataCheckTemplateWithOptions(request, headers, runtime);
  }

  /**
   * Creates a metadata data source and completes connectivity configuration. This is a prerequisite step for starting metadata discovery tasks. The create action does not require authentication, but the duplicate name check within it is authenticated.
   * 
   * @remarks
   * ## Operation description
   * Creates a metadata data source and registers its type, version, and connection configuration. A data source serves as the foundational input for capabilities such as metadata discovery, workflow migration, and data validation. Related tasks reference the data source created here by data source ID or name.
   * ## Request description
   * - `dsName` specifies the data source name, which must be unique within the same tenant. If the name already exists, the operation returns a data source already exists error.
   * - `dsType` and `dsVersion` specify the data source type and version, such as `Hive` and `3.2.0`.
   * - `dsConfig` specifies the data source connection configuration, submitted as a JSON string. The content varies by data source type and typically includes the access address and access credentials. Credential fields are masked when returned in query responses.
   * - `componentType` identifies the role of the data source in the migration pipeline: `0` for source, `1` for destination.
   * - `categoryType` specifies the data source category. Valid values: `DATASET`, `WORKFLOW`, `ENGINE`.
   * - `dsId` specifies the external ID of the data source. `dsStatus` specifies the connectivity status. `dsDesc` specifies the data source description.
   * ## Response description
   * Returns a single-value response. `data` contains the ID (long integer) of the newly created data source. Subsequent operations reference this data source by this ID or the data source name.
   * When `success` is `false`, use `errCode` and `errMessage` to identify the cause of the failure.
   * 
   * @param request - AddMetaDataComponentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddMetaDataComponentResponse
   */
  async addMetaDataComponentWithOptions(request: $_model.AddMetaDataComponentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddMetaDataComponentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryType)) {
      body["categoryType"] = request.categoryType;
    }

    if (!$dara.isNull(request.componentType)) {
      body["componentType"] = request.componentType;
    }

    if (!$dara.isNull(request.dsConfig)) {
      body["dsConfig"] = request.dsConfig;
    }

    if (!$dara.isNull(request.dsDesc)) {
      body["dsDesc"] = request.dsDesc;
    }

    if (!$dara.isNull(request.dsId)) {
      body["dsId"] = request.dsId;
    }

    if (!$dara.isNull(request.dsName)) {
      body["dsName"] = request.dsName;
    }

    if (!$dara.isNull(request.dsStatus)) {
      body["dsStatus"] = request.dsStatus;
    }

    if (!$dara.isNull(request.dsType)) {
      body["dsType"] = request.dsType;
    }

    if (!$dara.isNull(request.dsVersion)) {
      body["dsVersion"] = request.dsVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddMetaDataComponent",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/api/v2/meta/data-component`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddMetaDataComponentResponse>(await this.callApi(params, req, runtime), new $_model.AddMetaDataComponentResponse({}));
  }

  /**
   * Creates a metadata data source and completes connectivity configuration. This is a prerequisite step for starting metadata discovery tasks. The create action does not require authentication, but the duplicate name check within it is authenticated.
   * 
   * @remarks
   * ## Operation description
   * Creates a metadata data source and registers its type, version, and connection configuration. A data source serves as the foundational input for capabilities such as metadata discovery, workflow migration, and data validation. Related tasks reference the data source created here by data source ID or name.
   * ## Request description
   * - `dsName` specifies the data source name, which must be unique within the same tenant. If the name already exists, the operation returns a data source already exists error.
   * - `dsType` and `dsVersion` specify the data source type and version, such as `Hive` and `3.2.0`.
   * - `dsConfig` specifies the data source connection configuration, submitted as a JSON string. The content varies by data source type and typically includes the access address and access credentials. Credential fields are masked when returned in query responses.
   * - `componentType` identifies the role of the data source in the migration pipeline: `0` for source, `1` for destination.
   * - `categoryType` specifies the data source category. Valid values: `DATASET`, `WORKFLOW`, `ENGINE`.
   * - `dsId` specifies the external ID of the data source. `dsStatus` specifies the connectivity status. `dsDesc` specifies the data source description.
   * ## Response description
   * Returns a single-value response. `data` contains the ID (long integer) of the newly created data source. Subsequent operations reference this data source by this ID or the data source name.
   * When `success` is `false`, use `errCode` and `errMessage` to identify the cause of the failure.
   * 
   * @param request - AddMetaDataComponentRequest
   * @returns AddMetaDataComponentResponse
   */
  async addMetaDataComponent(request: $_model.AddMetaDataComponentRequest): Promise<$_model.AddMetaDataComponentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addMetaDataComponentWithOptions(request, headers, runtime);
  }

  /**
   * Creates an SQL conversion task and immediately runs the conversion. Returns a task ID for subsequent queries on conversion progress and results.
   * 
   * @remarks
   * ## Operation description
   * Creates an SQL conversion task and immediately triggers the conversion. This operation completes task creation and conversion execution in a single step. It is suitable for scenarios where source scripts are ready and you want to directly obtain target dialect scripts.
   * The returned task ID serves as the entry point for querying conversion progress, retrieving conversion results, and submitting results for execution.
   * ## Request description
   * - `taskName` is required and specifies the task name. `taskDescription` specifies the task description.
   * - `type` specifies the script type: `0` for DDL, `1` for DQL.
   * - `sourceDialect` and `targetDialect` specify the source and target SQL dialects. The conversion process rewrites source dialect scripts into target dialect scripts.
   * - `sourceSqlScript` is the list of scripts to convert. When creating a task, provide the script name, script ID, and original script content `sqlSourceContent`. Fields such as `sqlResultContent`, `errorMessage`, `finishTime`, and `scriptTransformStatus` carry conversion results and statuses and are populated by the server.
   * - Valid values of `scriptTransformStatus`: `pass` (conversion succeeded), `turning` (conversion in progress), `fail` (conversion failed). In some scenarios, the following values are used: `success` (succeeded), `failed` (failed), `skipped` (skipped).
   * - `tableMappingList` declares table name mappings from the source to the target, including the source schema and table name, and the target type and table name. During conversion, table names in scripts are rewritten based on these mappings.
   * ## Response description
   * The `data` field returns `taskId`, which is the ID of the conversion task that has been created and started. Use this ID to query conversion progress, retrieve conversion results, or submit conversion results for execution.
   * If `success` is `false`, use `errCode` and `errMessage` to identify the cause of the failure.
   * 
   * @param request - CreateExecuteSqlConversionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateExecuteSqlConversionResponse
   */
  async createExecuteSqlConversionWithOptions(request: $_model.CreateExecuteSqlConversionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateExecuteSqlConversionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sourceDialect)) {
      body["sourceDialect"] = request.sourceDialect;
    }

    if (!$dara.isNull(request.sourceSqlScript)) {
      body["sourceSqlScript"] = request.sourceSqlScript;
    }

    if (!$dara.isNull(request.targetDialect)) {
      body["targetDialect"] = request.targetDialect;
    }

    if (!$dara.isNull(request.taskDescription)) {
      body["taskDescription"] = request.taskDescription;
    }

    if (!$dara.isNull(request.taskName)) {
      body["taskName"] = request.taskName;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateExecuteSqlConversion",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/api/bigdata/jobMigrate/sqlTranslator/task/api/createExecute`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateExecuteSqlConversionResponse>(await this.callApi(params, req, runtime), new $_model.CreateExecuteSqlConversionResponse({}));
  }

  /**
   * Creates an SQL conversion task and immediately runs the conversion. Returns a task ID for subsequent queries on conversion progress and results.
   * 
   * @remarks
   * ## Operation description
   * Creates an SQL conversion task and immediately triggers the conversion. This operation completes task creation and conversion execution in a single step. It is suitable for scenarios where source scripts are ready and you want to directly obtain target dialect scripts.
   * The returned task ID serves as the entry point for querying conversion progress, retrieving conversion results, and submitting results for execution.
   * ## Request description
   * - `taskName` is required and specifies the task name. `taskDescription` specifies the task description.
   * - `type` specifies the script type: `0` for DDL, `1` for DQL.
   * - `sourceDialect` and `targetDialect` specify the source and target SQL dialects. The conversion process rewrites source dialect scripts into target dialect scripts.
   * - `sourceSqlScript` is the list of scripts to convert. When creating a task, provide the script name, script ID, and original script content `sqlSourceContent`. Fields such as `sqlResultContent`, `errorMessage`, `finishTime`, and `scriptTransformStatus` carry conversion results and statuses and are populated by the server.
   * - Valid values of `scriptTransformStatus`: `pass` (conversion succeeded), `turning` (conversion in progress), `fail` (conversion failed). In some scenarios, the following values are used: `success` (succeeded), `failed` (failed), `skipped` (skipped).
   * - `tableMappingList` declares table name mappings from the source to the target, including the source schema and table name, and the target type and table name. During conversion, table names in scripts are rewritten based on these mappings.
   * ## Response description
   * The `data` field returns `taskId`, which is the ID of the conversion task that has been created and started. Use this ID to query conversion progress, retrieve conversion results, or submit conversion results for execution.
   * If `success` is `false`, use `errCode` and `errMessage` to identify the cause of the failure.
   * 
   * @param request - CreateExecuteSqlConversionRequest
   * @returns CreateExecuteSqlConversionResponse
   */
  async createExecuteSqlConversion(request: $_model.CreateExecuteSqlConversionRequest): Promise<$_model.CreateExecuteSqlConversionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createExecuteSqlConversionWithOptions(request, headers, runtime);
  }

  /**
   * Submits SQL conversion results in batch to the target for execution and returns the execution job information for this submission.
   * 
   * @remarks
   * ## Operation description
   * Submits the conversion results generated by an SQL conversion task in batch to the target for execution. This is used to deploy scripts all at once after dialect conversion is complete.
   * This operation only handles submission and returns the execution job information generated by this submission.
   * ## Request description
   * - taskId specifies the SQL conversion task to submit for execution. The task must already have conversion results.
   * - concurrency specifies the concurrency level to control the number of concurrent executions for this submission. This is an optional parameter.
   * ## Response description
   * The data object returns taskId, execJobId (the execution job ID generated by this submission), success, and message. The inner success field indicates whether the submission action succeeded. If it fails, message provides the reason.
   * The outer success, errCode, and errMessage fields indicate the result of the API call itself. requestId is used to troubleshoot this call.
   * 
   * @param request - CreateSqlExecJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSqlExecJobResponse
   */
  async createSqlExecJobWithOptions(request: $_model.CreateSqlExecJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSqlExecJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.concurrency)) {
      body["concurrency"] = request.concurrency;
    }

    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSqlExecJob",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/api/bigdata/sql-translator/execute`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSqlExecJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateSqlExecJobResponse({}));
  }

  /**
   * Submits SQL conversion results in batch to the target for execution and returns the execution job information for this submission.
   * 
   * @remarks
   * ## Operation description
   * Submits the conversion results generated by an SQL conversion task in batch to the target for execution. This is used to deploy scripts all at once after dialect conversion is complete.
   * This operation only handles submission and returns the execution job information generated by this submission.
   * ## Request description
   * - taskId specifies the SQL conversion task to submit for execution. The task must already have conversion results.
   * - concurrency specifies the concurrency level to control the number of concurrent executions for this submission. This is an optional parameter.
   * ## Response description
   * The data object returns taskId, execJobId (the execution job ID generated by this submission), success, and message. The inner success field indicates whether the submission action succeeded. If it fails, message provides the reason.
   * The outer success, errCode, and errMessage fields indicate the result of the API call itself. requestId is used to troubleshoot this call.
   * 
   * @param request - CreateSqlExecJobRequest
   * @returns CreateSqlExecJobResponse
   */
  async createSqlExecJob(request: $_model.CreateSqlExecJobRequest): Promise<$_model.CreateSqlExecJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSqlExecJobWithOptions(request, headers, runtime);
  }

  /**
   * Deletes a specified data validation task configuration. After deletion, the configuration no longer participates in subsequent validation scheduling.
   * 
   * @remarks
   * ## Operation description
   * Deletes a table-level configuration from a data validation task. After deletion, the configuration no longer participates in subsequent validation scheduling. The task itself is not affected.
   * ## Request description
   * - id is required and specifies the ID of the configuration to delete. You can obtain this ID by calling the query data validation task configuration operation.
   * - This operation deletes a single configuration by configuration ID. Each call processes only one configuration.
   * ## Response description
   * A common response is returned, which contains only success, errCode, errMessage, and requestId. No business data is returned. If success is true, the deletion is successful. If success is false, use errCode and errMessage to identify the cause of the failure.
   * 
   * @param request - DeleteDataCheckConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataCheckConfigResponse
   */
  async deleteDataCheckConfigWithOptions(request: $_model.DeleteDataCheckConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataCheckConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataCheckConfig",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/dataCheck/config/v3/deleteConfig`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataCheckConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataCheckConfigResponse({}));
  }

  /**
   * Deletes a specified data validation task configuration. After deletion, the configuration no longer participates in subsequent validation scheduling.
   * 
   * @remarks
   * ## Operation description
   * Deletes a table-level configuration from a data validation task. After deletion, the configuration no longer participates in subsequent validation scheduling. The task itself is not affected.
   * ## Request description
   * - id is required and specifies the ID of the configuration to delete. You can obtain this ID by calling the query data validation task configuration operation.
   * - This operation deletes a single configuration by configuration ID. Each call processes only one configuration.
   * ## Response description
   * A common response is returned, which contains only success, errCode, errMessage, and requestId. No business data is returned. If success is true, the deletion is successful. If success is false, use errCode and errMessage to identify the cause of the failure.
   * 
   * @param request - DeleteDataCheckConfigRequest
   * @returns DeleteDataCheckConfigResponse
   */
  async deleteDataCheckConfig(request: $_model.DeleteDataCheckConfigRequest): Promise<$_model.DeleteDataCheckConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDataCheckConfigWithOptions(request, headers, runtime);
  }

  /**
   * Performs a logical deletion of data validation tasks (batch operation supported). Deleted tasks are no longer displayed in the list or scheduled for execution.
   * 
   * @remarks
   * ## Operation description
   * Batch deletes data validation tasks by using logical deletion. After deletion, tasks are no longer displayed in the task list or scheduled for execution.
   * ## Request description
   * - taskIds is required and specifies the list of task IDs to delete. You can delete multiple tasks in a single request.
   * - Deletion is logical, which only changes the visibility and scheduling status of tasks. Tasks that are currently running cannot be deleted.
   * ## Response description
   * A common response is returned, which contains only success, errCode, errMessage, and requestId. No business data is returned. If success is true, the deletion is successful. If success is false, use errCode and errMessage to identify the cause of the failure.
   * 
   * @param request - DeleteDataCheckTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataCheckTaskResponse
   */
  async deleteDataCheckTaskWithOptions(request: $_model.DeleteDataCheckTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataCheckTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskIds)) {
      body["taskIds"] = request.taskIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataCheckTask",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/dataCheck/task/v3/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataCheckTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataCheckTaskResponse({}));
  }

  /**
   * Performs a logical deletion of data validation tasks (batch operation supported). Deleted tasks are no longer displayed in the list or scheduled for execution.
   * 
   * @remarks
   * ## Operation description
   * Batch deletes data validation tasks by using logical deletion. After deletion, tasks are no longer displayed in the task list or scheduled for execution.
   * ## Request description
   * - taskIds is required and specifies the list of task IDs to delete. You can delete multiple tasks in a single request.
   * - Deletion is logical, which only changes the visibility and scheduling status of tasks. Tasks that are currently running cannot be deleted.
   * ## Response description
   * A common response is returned, which contains only success, errCode, errMessage, and requestId. No business data is returned. If success is true, the deletion is successful. If success is false, use errCode and errMessage to identify the cause of the failure.
   * 
   * @param request - DeleteDataCheckTaskRequest
   * @returns DeleteDataCheckTaskResponse
   */
  async deleteDataCheckTask(request: $_model.DeleteDataCheckTaskRequest): Promise<$_model.DeleteDataCheckTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDataCheckTaskWithOptions(request, headers, runtime);
  }

  /**
   * Batch deletes data validation templates along with their associated rule configurations and datasource engine relationships.
   * 
   * @remarks
   * ## Operation description
   * Batch deletes data validation templates to clean up templates that are no longer in use. The deletion scope includes the templates themselves and their associated rule configurations and datasource engine relationships.
   * ## Request description
   * - templateIds is the list of template IDs to delete. You can delete multiple templates at a time. If this list is empty, the operation returns a missing parameter error.
   * - The delete operation does not verify whether a template is referenced by a validation task. Check whether a template is referenced by a validation task by viewing the reference mark returned by the template list operation before deletion.
   * ## Response description
   * A common response is returned, which contains only success, errCode, errMessage, and requestId. No business data is returned. A value of true for success indicates that the deletion is successful. A value of false for success indicates a failure. Use errCode and errMessage to identify the cause of the failure.
   * 
   * @param request - DeleteDataCheckTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataCheckTemplateResponse
   */
  async deleteDataCheckTemplateWithOptions(request: $_model.DeleteDataCheckTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataCheckTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.templateIds)) {
      body["templateIds"] = request.templateIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataCheckTemplate",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/dataCheck/template/v3/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataCheckTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataCheckTemplateResponse({}));
  }

  /**
   * Batch deletes data validation templates along with their associated rule configurations and datasource engine relationships.
   * 
   * @remarks
   * ## Operation description
   * Batch deletes data validation templates to clean up templates that are no longer in use. The deletion scope includes the templates themselves and their associated rule configurations and datasource engine relationships.
   * ## Request description
   * - templateIds is the list of template IDs to delete. You can delete multiple templates at a time. If this list is empty, the operation returns a missing parameter error.
   * - The delete operation does not verify whether a template is referenced by a validation task. Check whether a template is referenced by a validation task by viewing the reference mark returned by the template list operation before deletion.
   * ## Response description
   * A common response is returned, which contains only success, errCode, errMessage, and requestId. No business data is returned. A value of true for success indicates that the deletion is successful. A value of false for success indicates a failure. Use errCode and errMessage to identify the cause of the failure.
   * 
   * @param request - DeleteDataCheckTemplateRequest
   * @returns DeleteDataCheckTemplateResponse
   */
  async deleteDataCheckTemplate(request: $_model.DeleteDataCheckTemplateRequest): Promise<$_model.DeleteDataCheckTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDataCheckTemplateWithOptions(request, headers, runtime);
  }

  /**
   * Edits the configuration of an existing SQL conversion task through the POP channel, such as the source dialect, target dialect, and conversion scope.
   * 
   * @remarks
   * ## Operation description
   * Edits the configuration of an existing SQL conversion task. The request is submitted through the POP open channel. You can modify the task name, task type, source and target dialects, concurrency, and the test data source associated with a DQL task.
   * ## Request description
   * - `taskId` is required and specifies the conversion task to edit. `taskType` is required and specifies the task type: `1` for DDL and `2` for DQL.
   * - `taskName`, `sourceDialect`, and `targetDialect` specify the task name, source SQL dialect, and target SQL dialect.
   * - `dqlTestDatasourceName` specifies the name of the test data source associated with a DQL task. The server resolves the corresponding data source by this name under the current tenant and uses it for subsequent conversion processing.
   * - `concurrency` specifies the concurrency for controlling the number of concurrent conversion executions.
   * ## Response description
   * The `data` field contains the result of this edit operation, including the task ID, record primary key ID, file upload and parsing ID, and the `success` and `message` fields that indicate whether the edit succeeded. If the edit fails, `message` provides the reason.
   * The outer `success`, `errCode`, and `errMessage` fields indicate the result of the API call itself. `requestId` is used for troubleshooting.
   * 
   * @param request - EditTaskPopRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EditTaskPopResponse
   */
  async editTaskPopWithOptions(request: $_model.EditTaskPopRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.EditTaskPopResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.concurrency)) {
      body["concurrency"] = request.concurrency;
    }

    if (!$dara.isNull(request.dqlTestDatasourceName)) {
      body["dqlTestDatasourceName"] = request.dqlTestDatasourceName;
    }

    if (!$dara.isNull(request.sourceDialect)) {
      body["sourceDialect"] = request.sourceDialect;
    }

    if (!$dara.isNull(request.targetDialect)) {
      body["targetDialect"] = request.targetDialect;
    }

    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskName)) {
      body["taskName"] = request.taskName;
    }

    if (!$dara.isNull(request.taskType)) {
      body["taskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EditTaskPop",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/api/bigdata/sql-translator/editPop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.EditTaskPopResponse>(await this.callApi(params, req, runtime), new $_model.EditTaskPopResponse({}));
  }

  /**
   * Edits the configuration of an existing SQL conversion task through the POP channel, such as the source dialect, target dialect, and conversion scope.
   * 
   * @remarks
   * ## Operation description
   * Edits the configuration of an existing SQL conversion task. The request is submitted through the POP open channel. You can modify the task name, task type, source and target dialects, concurrency, and the test data source associated with a DQL task.
   * ## Request description
   * - `taskId` is required and specifies the conversion task to edit. `taskType` is required and specifies the task type: `1` for DDL and `2` for DQL.
   * - `taskName`, `sourceDialect`, and `targetDialect` specify the task name, source SQL dialect, and target SQL dialect.
   * - `dqlTestDatasourceName` specifies the name of the test data source associated with a DQL task. The server resolves the corresponding data source by this name under the current tenant and uses it for subsequent conversion processing.
   * - `concurrency` specifies the concurrency for controlling the number of concurrent conversion executions.
   * ## Response description
   * The `data` field contains the result of this edit operation, including the task ID, record primary key ID, file upload and parsing ID, and the `success` and `message` fields that indicate whether the edit succeeded. If the edit fails, `message` provides the reason.
   * The outer `success`, `errCode`, and `errMessage` fields indicate the result of the API call itself. `requestId` is used for troubleshooting.
   * 
   * @param request - EditTaskPopRequest
   * @returns EditTaskPopResponse
   */
  async editTaskPop(request: $_model.EditTaskPopRequest): Promise<$_model.EditTaskPopResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.editTaskPopWithOptions(request, headers, runtime);
  }

  /**
   * Exports the result details file at the subtask level by validation batch for offline verification of data differences.
   * 
   * @remarks
   * ## Operation description
   * Exports the subtask result details file for a specified validation batch and returns a downloadable link. You can use this link to verify data differences offline, archive validation conclusions, or deliver results to business stakeholders for confirmation.
   * This operation only exports reports that have already been generated. It does not trigger report generation. If the report for the batch has not been generated, call the report generation operation first and wait until the report status changes to Generated before exporting.
   * ## Request description
   * - batchId specifies the validation batch to export. Obtain this value from the response of the save data validation task operation.
   * - Before calling this operation, make sure the report status for the batch is Generated. The export fails if the report has not been generated or generation has failed. Confirm the status by calling the report status query operation.
   * - Each call exports the result details for a single batch.
   * ## Response description
   * The response returns a single value. The data field contains the download link for the report file (a temporary Object Storage Service (OSS) URL). The link has an expiration time. Download the file promptly after obtaining the link. If the link expires, call this operation again to obtain a new link.
   * If success is false, use errCode and errMessage to identify the failure cause. Use requestId to troubleshoot the call.
   * 
   * @param request - ExecDataCheckDownloadReportRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecDataCheckDownloadReportResponse
   */
  async execDataCheckDownloadReportWithOptions(request: $_model.ExecDataCheckDownloadReportRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecDataCheckDownloadReportResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.batchId)) {
      query["batchId"] = request.batchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecDataCheckDownloadReport",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/dataCheck/report/v3/download`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecDataCheckDownloadReportResponse>(await this.callApi(params, req, runtime), new $_model.ExecDataCheckDownloadReportResponse({}));
  }

  /**
   * Exports the result details file at the subtask level by validation batch for offline verification of data differences.
   * 
   * @remarks
   * ## Operation description
   * Exports the subtask result details file for a specified validation batch and returns a downloadable link. You can use this link to verify data differences offline, archive validation conclusions, or deliver results to business stakeholders for confirmation.
   * This operation only exports reports that have already been generated. It does not trigger report generation. If the report for the batch has not been generated, call the report generation operation first and wait until the report status changes to Generated before exporting.
   * ## Request description
   * - batchId specifies the validation batch to export. Obtain this value from the response of the save data validation task operation.
   * - Before calling this operation, make sure the report status for the batch is Generated. The export fails if the report has not been generated or generation has failed. Confirm the status by calling the report status query operation.
   * - Each call exports the result details for a single batch.
   * ## Response description
   * The response returns a single value. The data field contains the download link for the report file (a temporary Object Storage Service (OSS) URL). The link has an expiration time. Download the file promptly after obtaining the link. If the link expires, call this operation again to obtain a new link.
   * If success is false, use errCode and errMessage to identify the failure cause. Use requestId to troubleshoot the call.
   * 
   * @param request - ExecDataCheckDownloadReportRequest
   * @returns ExecDataCheckDownloadReportResponse
   */
  async execDataCheckDownloadReport(request: $_model.ExecDataCheckDownloadReportRequest): Promise<$_model.ExecDataCheckDownloadReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.execDataCheckDownloadReportWithOptions(request, headers, runtime);
  }

  /**
   * Triggers report generation for a specified data validation batch. After generation is complete, you can query results through the report overview and details operations.
   * 
   * @remarks
   * ## Operation description
   * Triggers report generation for a specified data validation batch. After validation execution is complete, comparison results are stored as detailed records. You must generate a report before you can query results from the report perspective through operations such as report overview and report details, or export result files.
   * Report generation is an asynchronous process. This operation only initiates the generation. A successful response indicates that the generation request has been accepted, not that the report is available.
   * ## Request description
   * - `batchId` specifies the data validation batch for which to generate a report. The value is obtained from the response of the ExecDataCheckSaveTask operation.
   * - Initiate generation only after the validation execution of the batch is complete. A report generated for a batch that is still running does not contain the final results.
   * - Track the generation progress and result through the report status query operation. The report overview can be queried or the file can be exported only after the report status changes to "Generated".
   * ## Response description
   * A common response is returned, which contains only `success`, `errCode`, `errMessage`, and `requestId`. No business data is returned. If `success` is `true`, the generation request has been accepted. If `success` is `false`, use `errCode` and `errMessage` to identify the cause of the failure.
   * 
   * @param request - ExecDataCheckGenerateReportRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecDataCheckGenerateReportResponse
   */
  async execDataCheckGenerateReportWithOptions(request: $_model.ExecDataCheckGenerateReportRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecDataCheckGenerateReportResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.batchId)) {
      query["batchId"] = request.batchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecDataCheckGenerateReport",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/dataCheck/report/v3/generateReport`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecDataCheckGenerateReportResponse>(await this.callApi(params, req, runtime), new $_model.ExecDataCheckGenerateReportResponse({}));
  }

  /**
   * Triggers report generation for a specified data validation batch. After generation is complete, you can query results through the report overview and details operations.
   * 
   * @remarks
   * ## Operation description
   * Triggers report generation for a specified data validation batch. After validation execution is complete, comparison results are stored as detailed records. You must generate a report before you can query results from the report perspective through operations such as report overview and report details, or export result files.
   * Report generation is an asynchronous process. This operation only initiates the generation. A successful response indicates that the generation request has been accepted, not that the report is available.
   * ## Request description
   * - `batchId` specifies the data validation batch for which to generate a report. The value is obtained from the response of the ExecDataCheckSaveTask operation.
   * - Initiate generation only after the validation execution of the batch is complete. A report generated for a batch that is still running does not contain the final results.
   * - Track the generation progress and result through the report status query operation. The report overview can be queried or the file can be exported only after the report status changes to "Generated".
   * ## Response description
   * A common response is returned, which contains only `success`, `errCode`, `errMessage`, and `requestId`. No business data is returned. If `success` is `true`, the generation request has been accepted. If `success` is `false`, use `errCode` and `errMessage` to identify the cause of the failure.
   * 
   * @param request - ExecDataCheckGenerateReportRequest
   * @returns ExecDataCheckGenerateReportResponse
   */
  async execDataCheckGenerateReport(request: $_model.ExecDataCheckGenerateReportRequest): Promise<$_model.ExecDataCheckGenerateReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.execDataCheckGenerateReportWithOptions(request, headers, runtime);
  }

  /**
   * Reruns a completed data validation task to re-execute data comparison and generate a new validation batch.
   * 
   * @remarks
   * ## Operation description
   * Initiates a full rerun for the specified validation batch: a new batch is created based on the original batch, and all tables pending validation under the task are compared again, rather than only rerunning the failed portions.
   * This operation is applicable to scenarios where source or destination data has been corrected and a complete validation conclusion is needed. If you only need to rerun failed or unverified subtasks, use the rerun failed subtasks operation to avoid the resource consumption caused by a full comparison.
   * ## Request description
   * - `batchId` specifies the data validation batch to use as the rerun baseline. The value is obtained from the response of the ExecDataCheckSaveTask operation.
   * - The batch must exist and must not be in the running state. Repeated requests against a running batch are denied.
   * - Before the rerun starts, a connectivity dry run is performed on the source and destination data sources associated with the node. The rerun does not start if a data source is not active.
   * - The rerun uses the table-level configuration of the node to which the original batch belongs. The configuration itself is not modified.
   * ## Response description
   * A single-value response is returned. `data` is the batch ID of the newly created rerun batch. The execution progress, report, and result details of the rerun are associated with this new batch. The historical results of the original batch are retained. Use the new batch ID for subsequent queries and exports.
   * If `success` is `false`, use `errCode` and `errMessage` to identify the failure cause.
   * 
   * @param request - ExecDataCheckReRunRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecDataCheckReRunResponse
   */
  async execDataCheckReRunWithOptions(request: $_model.ExecDataCheckReRunRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecDataCheckReRunResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.batchId)) {
      body["batchId"] = request.batchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecDataCheckReRun",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/dataCheck/task/v3/rerun`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecDataCheckReRunResponse>(await this.callApi(params, req, runtime), new $_model.ExecDataCheckReRunResponse({}));
  }

  /**
   * Reruns a completed data validation task to re-execute data comparison and generate a new validation batch.
   * 
   * @remarks
   * ## Operation description
   * Initiates a full rerun for the specified validation batch: a new batch is created based on the original batch, and all tables pending validation under the task are compared again, rather than only rerunning the failed portions.
   * This operation is applicable to scenarios where source or destination data has been corrected and a complete validation conclusion is needed. If you only need to rerun failed or unverified subtasks, use the rerun failed subtasks operation to avoid the resource consumption caused by a full comparison.
   * ## Request description
   * - `batchId` specifies the data validation batch to use as the rerun baseline. The value is obtained from the response of the ExecDataCheckSaveTask operation.
   * - The batch must exist and must not be in the running state. Repeated requests against a running batch are denied.
   * - Before the rerun starts, a connectivity dry run is performed on the source and destination data sources associated with the node. The rerun does not start if a data source is not active.
   * - The rerun uses the table-level configuration of the node to which the original batch belongs. The configuration itself is not modified.
   * ## Response description
   * A single-value response is returned. `data` is the batch ID of the newly created rerun batch. The execution progress, report, and result details of the rerun are associated with this new batch. The historical results of the original batch are retained. Use the new batch ID for subsequent queries and exports.
   * If `success` is `false`, use `errCode` and `errMessage` to identify the failure cause.
   * 
   * @param request - ExecDataCheckReRunRequest
   * @returns ExecDataCheckReRunResponse
   */
  async execDataCheckReRun(request: $_model.ExecDataCheckReRunRequest): Promise<$_model.ExecDataCheckReRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.execDataCheckReRunWithOptions(request, headers, runtime);
  }

  /**
   * Triggers a data validation task immediately without waiting for timed scheduling.
   * 
   * @remarks
   * ## Operation description
   * Immediately triggers a data validation execution without waiting for timed scheduling. This is applicable when you want to view comparison results right after saving a configuration, or when you need to run an additional execution outside the scheduling cycle.
   * The execution is performed asynchronously. A success response from this operation indicates that the execution has been initiated. Query the comparison results through the report and result details operations after the check execution is complete.
   * ## Request description
   * - `batchId` specifies the check batch to execute. The value is obtained from the response of the operation that saves the data validation task.
   * - The batch must exist and must not be in the running state. Repeated requests for a running batch are rejected.
   * - Before execution, a connectivity dry run is performed on the source and target data sources associated with the task. The execution does not start if a data source is unavailable.
   * - If you want to execute immediately after saving the configuration, you can also set the immediate execution switch to enabled when saving the data validation task, without calling this operation separately.
   * ## Response description
   * A common response is returned, which contains only `success`, `errCode`, `errMessage`, and `requestId`. No business data is returned. A `success` value of `true` indicates that the execution has been initiated, not that the comparison is complete. If the value is `false`, use `errCode` and `errMessage` to identify the failure cause.
   * 
   * @param request - ExecDataCheckRunRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecDataCheckRunResponse
   */
  async execDataCheckRunWithOptions(request: $_model.ExecDataCheckRunRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecDataCheckRunResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.batchId)) {
      body["batchId"] = request.batchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecDataCheckRun",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/dataCheck/task/v3/run`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecDataCheckRunResponse>(await this.callApi(params, req, runtime), new $_model.ExecDataCheckRunResponse({}));
  }

  /**
   * Triggers a data validation task immediately without waiting for timed scheduling.
   * 
   * @remarks
   * ## Operation description
   * Immediately triggers a data validation execution without waiting for timed scheduling. This is applicable when you want to view comparison results right after saving a configuration, or when you need to run an additional execution outside the scheduling cycle.
   * The execution is performed asynchronously. A success response from this operation indicates that the execution has been initiated. Query the comparison results through the report and result details operations after the check execution is complete.
   * ## Request description
   * - `batchId` specifies the check batch to execute. The value is obtained from the response of the operation that saves the data validation task.
   * - The batch must exist and must not be in the running state. Repeated requests for a running batch are rejected.
   * - Before execution, a connectivity dry run is performed on the source and target data sources associated with the task. The execution does not start if a data source is unavailable.
   * - If you want to execute immediately after saving the configuration, you can also set the immediate execution switch to enabled when saving the data validation task, without calling this operation separately.
   * ## Response description
   * A common response is returned, which contains only `success`, `errCode`, `errMessage`, and `requestId`. No business data is returned. A `success` value of `true` indicates that the execution has been initiated, not that the comparison is complete. If the value is `false`, use `errCode` and `errMessage` to identify the failure cause.
   * 
   * @param request - ExecDataCheckRunRequest
   * @returns ExecDataCheckRunResponse
   */
  async execDataCheckRun(request: $_model.ExecDataCheckRunRequest): Promise<$_model.ExecDataCheckRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.execDataCheckRunWithOptions(request, headers, runtime);
  }

  /**
   * Reruns failed subtasks in a specified data validation batch, scoped by rerun type to avoid a full rerun.
   * 
   * @remarks
   * ## Operation description
   * Reruns subtasks that did not pass in a specified data validation batch. The rerun scope is limited by the rerun type to avoid rerunning tables that have already passed validation.
   * The difference from a full rerun is the scope: a full rerun revalidates all tables under the task, whereas this operation only reruns subtasks that match the selected type. Both approaches create a new batch to hold the results.
   * ## Request description
   * - `batchId` specifies the data validation batch to rerun. Obtain this value from the response of the ExecDataCheckSaveTask operation.
   * - `type` determines the rerun scope: `0` reruns only execution-failed subtasks, `1` reruns execution-failed and validation-failed subtasks, and `2` reruns execution-failed and stopped subtasks. If not specified, the default value is `1`.
   * - The specified batch must exist, and the most recent batch of the parent task must not be running. Otherwise, the rerun request is rejected.
   * - The specified batch must contain completed data validation subtasks. If no subtasks have finished, there are no subtasks to rerun, and the operation returns an error.
   * ## Response description
   * The response returns a single value. `data` is the ID of the new batch created for this rerun. The rerun progress and results are associated with this new batch. The original batch results remain unchanged. Use the new batch ID for subsequent queries and exports.
   * If `success` is `false`, check `errCode` and `errMessage` to identify the cause of the failure.
   * 
   * @param request - ExecDataCheckRunFailedRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecDataCheckRunFailedResponse
   */
  async execDataCheckRunFailedWithOptions(request: $_model.ExecDataCheckRunFailedRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecDataCheckRunFailedResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.batchId)) {
      body["batchId"] = request.batchId;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecDataCheckRunFailed",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/dataCheck/task/v3/runFailed`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecDataCheckRunFailedResponse>(await this.callApi(params, req, runtime), new $_model.ExecDataCheckRunFailedResponse({}));
  }

  /**
   * Reruns failed subtasks in a specified data validation batch, scoped by rerun type to avoid a full rerun.
   * 
   * @remarks
   * ## Operation description
   * Reruns subtasks that did not pass in a specified data validation batch. The rerun scope is limited by the rerun type to avoid rerunning tables that have already passed validation.
   * The difference from a full rerun is the scope: a full rerun revalidates all tables under the task, whereas this operation only reruns subtasks that match the selected type. Both approaches create a new batch to hold the results.
   * ## Request description
   * - `batchId` specifies the data validation batch to rerun. Obtain this value from the response of the ExecDataCheckSaveTask operation.
   * - `type` determines the rerun scope: `0` reruns only execution-failed subtasks, `1` reruns execution-failed and validation-failed subtasks, and `2` reruns execution-failed and stopped subtasks. If not specified, the default value is `1`.
   * - The specified batch must exist, and the most recent batch of the parent task must not be running. Otherwise, the rerun request is rejected.
   * - The specified batch must contain completed data validation subtasks. If no subtasks have finished, there are no subtasks to rerun, and the operation returns an error.
   * ## Response description
   * The response returns a single value. `data` is the ID of the new batch created for this rerun. The rerun progress and results are associated with this new batch. The original batch results remain unchanged. Use the new batch ID for subsequent queries and exports.
   * If `success` is `false`, check `errCode` and `errMessage` to identify the cause of the failure.
   * 
   * @param request - ExecDataCheckRunFailedRequest
   * @returns ExecDataCheckRunFailedResponse
   */
  async execDataCheckRunFailed(request: $_model.ExecDataCheckRunFailedRequest): Promise<$_model.ExecDataCheckRunFailedResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.execDataCheckRunFailedWithOptions(request, headers, runtime);
  }

  /**
   * Saves one or more modified data validation tasks. You can also configure settings such as whether to perform full-table validation and whether to execute the task immediately.
   * 
   * @remarks
   * ## Operation description
   * Saves the execution configuration of a data validation task and generates a validation batch for the task. The task itself describes which two data sources to validate and which validation method to use. This operation determines the execution scope of the validation: whether to perform full-table validation, global parameters, data volume difference thresholds, and whether to execute immediately after saving.
   * The batch ID returned upon successful saving serves as the unified entry point for subsequent operations such as execution, stopping, re-running, report generation, and result detail queries.
   * ## Request description
   * - `taskId` specifies the validation task for which to save the configuration. The task must already exist.
   * - Before saving, the system checks whether the task has any table detail configurations. If no table detail configurations exist, the save operation is rejected. Add table detail configurations to the task first.
   * - `fullTableCount` determines the comparison granularity: `0` for partition-level validation (default), `1` for full-table validation.
   * - `sourceGlobalParams`, `targetGlobalParams`, and `checkGlobalParams` are global parameters for the source, target, and validation phases respectively. Separate multiple parameters with a line feed (`\\n`).
   * - `totalCountThreshold` is the total data volume comparison threshold, used to determine whether the data volume difference between the source and target is within an acceptable range.
   * - `startImmediately` determines whether to execute immediately after saving: `0` for no (default), `1` for yes. When set to `1`, the generated batch starts asynchronous execution immediately, eliminating the need to call a separate execution operation.
   * ## Response description
   * Returns a single-value response. `data` is the validation batch ID generated by this save operation (not the task ID). Subsequent operations such as execution, stopping, re-running, report generation, and result detail queries all reference this validation by the batch ID.
   * When `success` is `false`, use `errCode` and `errMessage` to identify the cause of the failure.
   * 
   * @param request - ExecDataCheckSaveTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecDataCheckSaveTaskResponse
   */
  async execDataCheckSaveTaskWithOptions(request: $_model.ExecDataCheckSaveTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecDataCheckSaveTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.checkGlobalParams)) {
      body["checkGlobalParams"] = request.checkGlobalParams;
    }

    if (!$dara.isNull(request.fullTableCount)) {
      body["fullTableCount"] = request.fullTableCount;
    }

    if (!$dara.isNull(request.sourceGlobalParams)) {
      body["sourceGlobalParams"] = request.sourceGlobalParams;
    }

    if (!$dara.isNull(request.startImmediately)) {
      body["startImmediately"] = request.startImmediately;
    }

    if (!$dara.isNull(request.targetGlobalParams)) {
      body["targetGlobalParams"] = request.targetGlobalParams;
    }

    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    if (!$dara.isNull(request.totalCountThreshold)) {
      body["totalCountThreshold"] = request.totalCountThreshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecDataCheckSaveTask",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/dataCheck/task/v3/save`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecDataCheckSaveTaskResponse>(await this.callApi(params, req, runtime), new $_model.ExecDataCheckSaveTaskResponse({}));
  }

  /**
   * Saves one or more modified data validation tasks. You can also configure settings such as whether to perform full-table validation and whether to execute the task immediately.
   * 
   * @remarks
   * ## Operation description
   * Saves the execution configuration of a data validation task and generates a validation batch for the task. The task itself describes which two data sources to validate and which validation method to use. This operation determines the execution scope of the validation: whether to perform full-table validation, global parameters, data volume difference thresholds, and whether to execute immediately after saving.
   * The batch ID returned upon successful saving serves as the unified entry point for subsequent operations such as execution, stopping, re-running, report generation, and result detail queries.
   * ## Request description
   * - `taskId` specifies the validation task for which to save the configuration. The task must already exist.
   * - Before saving, the system checks whether the task has any table detail configurations. If no table detail configurations exist, the save operation is rejected. Add table detail configurations to the task first.
   * - `fullTableCount` determines the comparison granularity: `0` for partition-level validation (default), `1` for full-table validation.
   * - `sourceGlobalParams`, `targetGlobalParams`, and `checkGlobalParams` are global parameters for the source, target, and validation phases respectively. Separate multiple parameters with a line feed (`\\n`).
   * - `totalCountThreshold` is the total data volume comparison threshold, used to determine whether the data volume difference between the source and target is within an acceptable range.
   * - `startImmediately` determines whether to execute immediately after saving: `0` for no (default), `1` for yes. When set to `1`, the generated batch starts asynchronous execution immediately, eliminating the need to call a separate execution operation.
   * ## Response description
   * Returns a single-value response. `data` is the validation batch ID generated by this save operation (not the task ID). Subsequent operations such as execution, stopping, re-running, report generation, and result detail queries all reference this validation by the batch ID.
   * When `success` is `false`, use `errCode` and `errMessage` to identify the cause of the failure.
   * 
   * @param request - ExecDataCheckSaveTaskRequest
   * @returns ExecDataCheckSaveTaskResponse
   */
  async execDataCheckSaveTask(request: $_model.ExecDataCheckSaveTaskRequest): Promise<$_model.ExecDataCheckSaveTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.execDataCheckSaveTaskWithOptions(request, headers, runtime);
  }

  /**
   * Generates a preview of the comparison SQL that will be issued based on the check task configuration, allowing you to confirm the check scope before execution.
   * 
   * @remarks
   * ## Operation description
   * Generates and returns the actual comparison SQL that will be issued based on the specified table and check conditions, without executing it. Use this operation to confirm whether the check scope meets expectations before you execute the check. For example, you can verify that the partition range, filter conditions, and fields involved in the comparison are correctly defined.
   * The generated SQL is intended only for preview and troubleshooting purposes and can serve as a reference for diagnosing unexpected comparison results.
   * ## Request description
   * - `dataSourceId` specifies the data source on which the SQL is generated.
   * - `fullTableName` specifies the table to check, in the format `schema.table`.
   * - `taskId` specifies the check task, which is used to retrieve the check method and rules configured for that task.
   * - `engineId` specifies the check engine, used in Spark check scenarios.
   * - `partitionCondition` is the partition condition that limits the comparison scope to specified partitions. `whereClause` is the filter condition that further limits the rows involved in the comparison.
   * - `checkColumn` specifies the fields involved in the comparison. Separate multiple fields with commas (,). If not specified, the SQL is generated based on the field scope configured for the task.
   * ## Response description
   * Returns a single-value response. `data` contains the generated comparison SQL statement text. Because this operation only generates the SQL without executing it, a successful response does not indicate that data has been compared.
   * If `success` is `false`, use `errCode` and `errMessage` to identify the cause of the failure.
   * 
   * @param request - ExecDataCheckSqlPreviewRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecDataCheckSqlPreviewResponse
   */
  async execDataCheckSqlPreviewWithOptions(request: $_model.ExecDataCheckSqlPreviewRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecDataCheckSqlPreviewResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.checkColumn)) {
      body["checkColumn"] = request.checkColumn;
    }

    if (!$dara.isNull(request.dataSourceId)) {
      body["dataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.engineId)) {
      body["engineId"] = request.engineId;
    }

    if (!$dara.isNull(request.fullTableName)) {
      body["fullTableName"] = request.fullTableName;
    }

    if (!$dara.isNull(request.partitionCondition)) {
      body["partitionCondition"] = request.partitionCondition;
    }

    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    if (!$dara.isNull(request.whereClause)) {
      body["whereClause"] = request.whereClause;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecDataCheckSqlPreview",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/dataCheck/config/v3/sql/preview`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecDataCheckSqlPreviewResponse>(await this.callApi(params, req, runtime), new $_model.ExecDataCheckSqlPreviewResponse({}));
  }

  /**
   * Generates a preview of the comparison SQL that will be issued based on the check task configuration, allowing you to confirm the check scope before execution.
   * 
   * @remarks
   * ## Operation description
   * Generates and returns the actual comparison SQL that will be issued based on the specified table and check conditions, without executing it. Use this operation to confirm whether the check scope meets expectations before you execute the check. For example, you can verify that the partition range, filter conditions, and fields involved in the comparison are correctly defined.
   * The generated SQL is intended only for preview and troubleshooting purposes and can serve as a reference for diagnosing unexpected comparison results.
   * ## Request description
   * - `dataSourceId` specifies the data source on which the SQL is generated.
   * - `fullTableName` specifies the table to check, in the format `schema.table`.
   * - `taskId` specifies the check task, which is used to retrieve the check method and rules configured for that task.
   * - `engineId` specifies the check engine, used in Spark check scenarios.
   * - `partitionCondition` is the partition condition that limits the comparison scope to specified partitions. `whereClause` is the filter condition that further limits the rows involved in the comparison.
   * - `checkColumn` specifies the fields involved in the comparison. Separate multiple fields with commas (,). If not specified, the SQL is generated based on the field scope configured for the task.
   * ## Response description
   * Returns a single-value response. `data` contains the generated comparison SQL statement text. Because this operation only generates the SQL without executing it, a successful response does not indicate that data has been compared.
   * If `success` is `false`, use `errCode` and `errMessage` to identify the cause of the failure.
   * 
   * @param request - ExecDataCheckSqlPreviewRequest
   * @returns ExecDataCheckSqlPreviewResponse
   */
  async execDataCheckSqlPreview(request: $_model.ExecDataCheckSqlPreviewRequest): Promise<$_model.ExecDataCheckSqlPreviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.execDataCheckSqlPreviewWithOptions(request, headers, runtime);
  }

  /**
   * Stops the check node execution in the current scheduling run. Task results of completed subtasks are retained.
   * 
   * @remarks
   * ## Operation description
   * Stops a running check batch and terminates any incomplete comparison work in the current scheduling run. Task results of completed subtasks are retained. After the node is stopped, you can rerun only the failed and stopped portions without rerunning the entire node.
   * This operation is applicable to scenarios where the check scope is misconfigured, the source or destination is under heavy load and needs to be relieved, or the execution time needs to be rescheduled.
   * ## Request description
   * - `batchId` specifies the check batch to stop. The value is obtained from the response of the API operation that saves the data validation node.
   * - You can stop only a batch that is in the running state. If the batch does not exist or has already ended (succeeded, failed, or stopped), the operation returns an error without making any changes.
   * - The stop action applies only to the current batch and does not change the timed scheduling switch of the node. To stop periodic execution, use the API operation that enables or disables timed scheduling.
   * ## Response description
   * A common response is returned, which contains only `success`, `errCode`, `errMessage`, and `requestId`. No business data is returned. If `success` is `true`, the stop action has taken effect. If `success` is `false`, use `errCode` and `errMessage` to identify the cause of the failure. The error message "task is not running" indicates that the batch no longer needs to be stopped.
   * 
   * @param request - ExecDataCheckStopRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecDataCheckStopResponse
   */
  async execDataCheckStopWithOptions(request: $_model.ExecDataCheckStopRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecDataCheckStopResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.batchId)) {
      body["batchId"] = request.batchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecDataCheckStop",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/dataCheck/task/v3/stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecDataCheckStopResponse>(await this.callApi(params, req, runtime), new $_model.ExecDataCheckStopResponse({}));
  }

  /**
   * Stops the check node execution in the current scheduling run. Task results of completed subtasks are retained.
   * 
   * @remarks
   * ## Operation description
   * Stops a running check batch and terminates any incomplete comparison work in the current scheduling run. Task results of completed subtasks are retained. After the node is stopped, you can rerun only the failed and stopped portions without rerunning the entire node.
   * This operation is applicable to scenarios where the check scope is misconfigured, the source or destination is under heavy load and needs to be relieved, or the execution time needs to be rescheduled.
   * ## Request description
   * - `batchId` specifies the check batch to stop. The value is obtained from the response of the API operation that saves the data validation node.
   * - You can stop only a batch that is in the running state. If the batch does not exist or has already ended (succeeded, failed, or stopped), the operation returns an error without making any changes.
   * - The stop action applies only to the current batch and does not change the timed scheduling switch of the node. To stop periodic execution, use the API operation that enables or disables timed scheduling.
   * ## Response description
   * A common response is returned, which contains only `success`, `errCode`, `errMessage`, and `requestId`. No business data is returned. If `success` is `true`, the stop action has taken effect. If `success` is `false`, use `errCode` and `errMessage` to identify the cause of the failure. The error message "task is not running" indicates that the batch no longer needs to be stopped.
   * 
   * @param request - ExecDataCheckStopRequest
   * @returns ExecDataCheckStopResponse
   */
  async execDataCheckStop(request: $_model.ExecDataCheckStopRequest): Promise<$_model.ExecDataCheckStopResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.execDataCheckStopWithOptions(request, headers, runtime);
  }

  /**
   * Switches the timed scheduling toggle of a data validation task to control whether the task is periodically executed based on a Cron rule.
   * 
   * @remarks
   * ## Operation description
   * Starts or stops the timed scheduling toggle of a data validation task to control whether the task is periodically executed based on the configured scheduling rule. You can submit multiple tasks at a time to start or stop a batch of validation tasks.
   * This operation only switches the scheduling toggle. It does not change the scheduling expression of the task or trigger an immediate execution. To run a task immediately, use the immediate execution operation for validation tasks.
   * ## Request description
   * - `params` is a list of task scheduling parameters. You can submit multiple tasks at a time.
   * - The `id` field in each item is the validation task ID. The `lastBatchId` field is the most recent batch number of the task. The `isScheduled` field is the target scheduling status: `0` indicates that timed scheduling is stopped, and `1` indicates that timed scheduling is started.
   * - To start timed scheduling, the task must have a valid scheduling rule configured. After timed scheduling is stopped, the task is no longer periodically triggered, and existing historical batches and results are retained.
   * ## Response description
   * A common response is returned, which contains only `success`, `errCode`, `errMessage`, and `requestId`. No business data is returned. If `success` is `true`, the scheduling status of the tasks in the list has been switched as submitted. If `success` is `false`, use `errCode` and `errMessage` to identify the cause of the failure.
   * 
   * @param request - ExecDataCheckToggleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecDataCheckToggleResponse
   */
  async execDataCheckToggleWithOptions(request: $_model.ExecDataCheckToggleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecDataCheckToggleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.params)) {
      body["params"] = request.params;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecDataCheckToggle",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/dataCheck/task/v3/toggle`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecDataCheckToggleResponse>(await this.callApi(params, req, runtime), new $_model.ExecDataCheckToggleResponse({}));
  }

  /**
   * Switches the timed scheduling toggle of a data validation task to control whether the task is periodically executed based on a Cron rule.
   * 
   * @remarks
   * ## Operation description
   * Starts or stops the timed scheduling toggle of a data validation task to control whether the task is periodically executed based on the configured scheduling rule. You can submit multiple tasks at a time to start or stop a batch of validation tasks.
   * This operation only switches the scheduling toggle. It does not change the scheduling expression of the task or trigger an immediate execution. To run a task immediately, use the immediate execution operation for validation tasks.
   * ## Request description
   * - `params` is a list of task scheduling parameters. You can submit multiple tasks at a time.
   * - The `id` field in each item is the validation task ID. The `lastBatchId` field is the most recent batch number of the task. The `isScheduled` field is the target scheduling status: `0` indicates that timed scheduling is stopped, and `1` indicates that timed scheduling is started.
   * - To start timed scheduling, the task must have a valid scheduling rule configured. After timed scheduling is stopped, the task is no longer periodically triggered, and existing historical batches and results are retained.
   * ## Response description
   * A common response is returned, which contains only `success`, `errCode`, `errMessage`, and `requestId`. No business data is returned. If `success` is `true`, the scheduling status of the tasks in the list has been switched as submitted. If `success` is `false`, use `errCode` and `errMessage` to identify the cause of the failure.
   * 
   * @param request - ExecDataCheckToggleRequest
   * @returns ExecDataCheckToggleResponse
   */
  async execDataCheckToggle(request: $_model.ExecDataCheckToggleRequest): Promise<$_model.ExecDataCheckToggleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.execDataCheckToggleWithOptions(request, headers, runtime);
  }

  /**
   * Checks whether a datasource with the specified name already exists under the current tenant. This operation is used as a pre-check before creating or renaming a datasource.
   * 
   * @remarks
   * ## Operation description
   * Checks whether a datasource name is already in use under the current tenant. This operation is used as a pre-check before creating a datasource or updating a datasource name.
   * Datasource names must be unique within a tenant. If a name conflict exists, the creation request fails directly. Call this operation first to confirm that the name is available. This helps you avoid exposing conflicts only when you submit the creation request.
   * ## Request description
   * - `dsName` specifies the datasource name to check. The system performs an exact match against non-deleted datasources under the current tenant. Prefix matching and fuzzy matching are not supported.
   * - The check scope is limited to the current tenant. Datasources with the same name under other tenants do not affect the result. Names of deleted datasources can be reused.
   * ## Response description
   * The response returns a single value. `data` is a Boolean value that indicates the name check result: `true` indicates that a datasource with the same name already exists and the name is unavailable. `false` indicates that the name is not in use and can be used to create a datasource.
   * Note that the semantics of `data` is opposite to that of `success`. If `success` is `true` and `data` is `true`, the call succeeded and a datasource with the same name was found. In this case, use a different name. If `success` is `false`, use `errCode` and `errMessage` to identify the cause of the call failure.
   * 
   * @param request - ExecMetaDataComponentNameRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecMetaDataComponentNameResponse
   */
  async execMetaDataComponentNameWithOptions(request: $_model.ExecMetaDataComponentNameRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecMetaDataComponentNameResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dsName)) {
      query["dsName"] = request.dsName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecMetaDataComponentName",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/api/v2/meta/data-component/check-name`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecMetaDataComponentNameResponse>(await this.callApi(params, req, runtime), new $_model.ExecMetaDataComponentNameResponse({}));
  }

  /**
   * Checks whether a datasource with the specified name already exists under the current tenant. This operation is used as a pre-check before creating or renaming a datasource.
   * 
   * @remarks
   * ## Operation description
   * Checks whether a datasource name is already in use under the current tenant. This operation is used as a pre-check before creating a datasource or updating a datasource name.
   * Datasource names must be unique within a tenant. If a name conflict exists, the creation request fails directly. Call this operation first to confirm that the name is available. This helps you avoid exposing conflicts only when you submit the creation request.
   * ## Request description
   * - `dsName` specifies the datasource name to check. The system performs an exact match against non-deleted datasources under the current tenant. Prefix matching and fuzzy matching are not supported.
   * - The check scope is limited to the current tenant. Datasources with the same name under other tenants do not affect the result. Names of deleted datasources can be reused.
   * ## Response description
   * The response returns a single value. `data` is a Boolean value that indicates the name check result: `true` indicates that a datasource with the same name already exists and the name is unavailable. `false` indicates that the name is not in use and can be used to create a datasource.
   * Note that the semantics of `data` is opposite to that of `success`. If `success` is `true` and `data` is `true`, the call succeeded and a datasource with the same name was found. In this case, use a different name. If `success` is `false`, use `errCode` and `errMessage` to identify the cause of the call failure.
   * 
   * @param request - ExecMetaDataComponentNameRequest
   * @returns ExecMetaDataComponentNameResponse
   */
  async execMetaDataComponentName(request: $_model.ExecMetaDataComponentNameRequest): Promise<$_model.ExecMetaDataComponentNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.execMetaDataComponentNameWithOptions(request, headers, runtime);
  }

  /**
   * Converts a single SQL script.
   * 
   * @remarks
   * ## Operation description
   * Performs a synchronous conversion of a single SQL script. The parsing and rewriting are completed within a single call, and the SQL text in the target dialect is returned directly. This operation is suitable for manually verifying individual statements or validating conversion results. The conversion processes statements as query statements (DQL). To convert entire scripts or large files in batches, use the asynchronous script conversion task operation to avoid synchronous call timeouts.
   * ## Request description
   * - The request body is a JSON object. `sourceDialect` and `targetDialect` specify the source and target SQL dialects (such as hive or maxcompute), which determine the direction of the rewriting rules.
   * - `sourceSqlScript` is the script content to be converted. It must be Base64-encoded before being passed in. The server decodes the content before performing the conversion. Passing in the raw text causes a decoding failure and prevents the conversion.
   * - `tableMapping` is a list of table name mappings. Each element uses a comma (,) to separate the source table and target table (such as `src_table,dst_table`). Multiple mappings are merged by line breaks during conversion. If this parameter is not specified, the original table names in the script are used.
   * ## Response description
   * A single-value response is returned. `data` is the converted SQL script in the target dialect (string). If `success` is `true`, the conversion is complete. If `success` is `false`, use `errCode` and `errMessage` to identify the failure cause. `requestId` is used to troubleshoot the call.
   * 
   * @param request - ExecSqlTransSingleScriptTranslateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecSqlTransSingleScriptTranslateResponse
   */
  async execSqlTransSingleScriptTranslateWithOptions(request: $_model.ExecSqlTransSingleScriptTranslateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecSqlTransSingleScriptTranslateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sourceDialect)) {
      body["sourceDialect"] = request.sourceDialect;
    }

    if (!$dara.isNull(request.sourceSqlScript)) {
      body["sourceSqlScript"] = request.sourceSqlScript;
    }

    if (!$dara.isNull(request.tableMapping)) {
      body["tableMapping"] = request.tableMapping;
    }

    if (!$dara.isNull(request.targetDialect)) {
      body["targetDialect"] = request.targetDialect;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecSqlTransSingleScriptTranslate",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/api/bigdata/sql-translator/open/single/translate-sync`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecSqlTransSingleScriptTranslateResponse>(await this.callApi(params, req, runtime), new $_model.ExecSqlTransSingleScriptTranslateResponse({}));
  }

  /**
   * Converts a single SQL script.
   * 
   * @remarks
   * ## Operation description
   * Performs a synchronous conversion of a single SQL script. The parsing and rewriting are completed within a single call, and the SQL text in the target dialect is returned directly. This operation is suitable for manually verifying individual statements or validating conversion results. The conversion processes statements as query statements (DQL). To convert entire scripts or large files in batches, use the asynchronous script conversion task operation to avoid synchronous call timeouts.
   * ## Request description
   * - The request body is a JSON object. `sourceDialect` and `targetDialect` specify the source and target SQL dialects (such as hive or maxcompute), which determine the direction of the rewriting rules.
   * - `sourceSqlScript` is the script content to be converted. It must be Base64-encoded before being passed in. The server decodes the content before performing the conversion. Passing in the raw text causes a decoding failure and prevents the conversion.
   * - `tableMapping` is a list of table name mappings. Each element uses a comma (,) to separate the source table and target table (such as `src_table,dst_table`). Multiple mappings are merged by line breaks during conversion. If this parameter is not specified, the original table names in the script are used.
   * ## Response description
   * A single-value response is returned. `data` is the converted SQL script in the target dialect (string). If `success` is `true`, the conversion is complete. If `success` is `false`, use `errCode` and `errMessage` to identify the failure cause. `requestId` is used to troubleshoot the call.
   * 
   * @param request - ExecSqlTransSingleScriptTranslateRequest
   * @returns ExecSqlTransSingleScriptTranslateResponse
   */
  async execSqlTransSingleScriptTranslate(request: $_model.ExecSqlTransSingleScriptTranslateRequest): Promise<$_model.ExecSqlTransSingleScriptTranslateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.execSqlTransSingleScriptTranslateWithOptions(request, headers, runtime);
  }

  /**
   * Checks the connectivity of a storage data source used for schedule migration. You can submit a workflow migration task only after the connectivity check is passed.
   * 
   * @remarks
   * ## Operation description
   * Checks whether a storage data source used for schedule migration is reachable. Before submitting a workflow migration (write) task, call this operation to verify that the destination storage is accessible. This helps you identify connection issues before the task enters the write phase.
   * ## Request description
   * - The request body is a JSON object. The dsName, dsType, dsVersion, and dsConfig parameters together describe the data source to be checked. The dsConfig parameter is a JSON string whose structure is determined by dsType.
   * - If you specify id, the check is performed on a registered data source. The isModified parameter indicates whether the configuration has been modified, which tells the server to reconnect by using the new configuration.
   * - The check is performed in the schedule migration scenario and only determines whether the access capabilities required for this scenario are available.
   * ## Response description
   * If the data source is reachable, success is set to true and data is set to true. If the data source is not reachable, the operation returns an error: errCode contains the data source connection error, and errMessage provides the specific failure reason. Use this information to check network reachability, account permissions, and dsConfig settings.
   * 
   * @param request - ExecWorkflowConnectivityRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecWorkflowConnectivityResponse
   */
  async execWorkflowConnectivityWithOptions(request: $_model.ExecWorkflowConnectivityRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecWorkflowConnectivityResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dsConfig)) {
      body["dsConfig"] = request.dsConfig;
    }

    if (!$dara.isNull(request.dsName)) {
      body["dsName"] = request.dsName;
    }

    if (!$dara.isNull(request.dsType)) {
      body["dsType"] = request.dsType;
    }

    if (!$dara.isNull(request.dsVersion)) {
      body["dsVersion"] = request.dsVersion;
    }

    if (!$dara.isNull(request.id)) {
      body["id"] = request.id;
    }

    if (!$dara.isNull(request.isModified)) {
      body["isModified"] = request.isModified;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecWorkflowConnectivity",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/api/v2/meta/data-component/workflow/connectivity`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecWorkflowConnectivityResponse>(await this.callApi(params, req, runtime), new $_model.ExecWorkflowConnectivityResponse({}));
  }

  /**
   * Checks the connectivity of a storage data source used for schedule migration. You can submit a workflow migration task only after the connectivity check is passed.
   * 
   * @remarks
   * ## Operation description
   * Checks whether a storage data source used for schedule migration is reachable. Before submitting a workflow migration (write) task, call this operation to verify that the destination storage is accessible. This helps you identify connection issues before the task enters the write phase.
   * ## Request description
   * - The request body is a JSON object. The dsName, dsType, dsVersion, and dsConfig parameters together describe the data source to be checked. The dsConfig parameter is a JSON string whose structure is determined by dsType.
   * - If you specify id, the check is performed on a registered data source. The isModified parameter indicates whether the configuration has been modified, which tells the server to reconnect by using the new configuration.
   * - The check is performed in the schedule migration scenario and only determines whether the access capabilities required for this scenario are available.
   * ## Response description
   * If the data source is reachable, success is set to true and data is set to true. If the data source is not reachable, the operation returns an error: errCode contains the data source connection error, and errMessage provides the specific failure reason. Use this information to check network reachability, account permissions, and dsConfig settings.
   * 
   * @param request - ExecWorkflowConnectivityRequest
   * @returns ExecWorkflowConnectivityResponse
   */
  async execWorkflowConnectivity(request: $_model.ExecWorkflowConnectivityRequest): Promise<$_model.ExecWorkflowConnectivityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.execWorkflowConnectivityWithOptions(request, headers, runtime);
  }

  /**
   * Queries the paging list of commit (write) instances for a scheduling migration node by node ID and status, and returns the transform and commit stage status of each instance.
   * 
   * @remarks
   * ## Operation description
   * Queries the paging list of instances in the commit (write) stage for a scheduling migration node to view the transform and commit progress of each workflow instance on the destination. After a commit node is started, this operation serves as the primary entry point for tracking the execute results.
   * ## Request description
   * - `taskId` is required and specifies the scheduling migration node ID.
   * - `status` is optional and filters instances by instance status. If this parameter is not specified, instances in all statuses under the node are returned.
   * - `pageIndex` and `pageSize` are optional and specify the page number and the number of entries per page. Default values are 1 and 10.
   * ## Response description
   * A paging response is returned: `totalCount` indicates the total number of instances that meet the conditional criteria, `pageIndex` and `pageSize` echo the paging parameters of the current request, and `data` contains the instance list for the current page. Each list element includes the instance identity (`instanceId` and `instanceName`), the source scheduling information `srcMetaInfo` and its metadata update time `srcMetaGmtUpdate`, the transform execute time `gmtConvert`, the transform result `status`, and the transform failed reason `detail`. When `success` is `false`, use `errCode` and `errMessage` to troubleshoot the issue.
   * 
   * @param request - GetBwmMigrationSubmitInstanceListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBwmMigrationSubmitInstanceListResponse
   */
  async getBwmMigrationSubmitInstanceListWithOptions(request: $_model.GetBwmMigrationSubmitInstanceListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetBwmMigrationSubmitInstanceListResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBwmMigrationSubmitInstanceList",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/api/bwm/task/migration/submit/instances/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBwmMigrationSubmitInstanceListResponse>(await this.callApi(params, req, runtime), new $_model.GetBwmMigrationSubmitInstanceListResponse({}));
  }

  /**
   * Queries the paging list of commit (write) instances for a scheduling migration node by node ID and status, and returns the transform and commit stage status of each instance.
   * 
   * @remarks
   * ## Operation description
   * Queries the paging list of instances in the commit (write) stage for a scheduling migration node to view the transform and commit progress of each workflow instance on the destination. After a commit node is started, this operation serves as the primary entry point for tracking the execute results.
   * ## Request description
   * - `taskId` is required and specifies the scheduling migration node ID.
   * - `status` is optional and filters instances by instance status. If this parameter is not specified, instances in all statuses under the node are returned.
   * - `pageIndex` and `pageSize` are optional and specify the page number and the number of entries per page. Default values are 1 and 10.
   * ## Response description
   * A paging response is returned: `totalCount` indicates the total number of instances that meet the conditional criteria, `pageIndex` and `pageSize` echo the paging parameters of the current request, and `data` contains the instance list for the current page. Each list element includes the instance identity (`instanceId` and `instanceName`), the source scheduling information `srcMetaInfo` and its metadata update time `srcMetaGmtUpdate`, the transform execute time `gmtConvert`, the transform result `status`, and the transform failed reason `detail`. When `success` is `false`, use `errCode` and `errMessage` to troubleshoot the issue.
   * 
   * @param request - GetBwmMigrationSubmitInstanceListRequest
   * @returns GetBwmMigrationSubmitInstanceListResponse
   */
  async getBwmMigrationSubmitInstanceList(request: $_model.GetBwmMigrationSubmitInstanceListRequest): Promise<$_model.GetBwmMigrationSubmitInstanceListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getBwmMigrationSubmitInstanceListWithOptions(request, headers, runtime);
  }

  /**
   * Exports the result package of a write task by instance ID for offline viewing of complete batch write results.
   * 
   * @remarks
   * ## Operation description
   * Exports the result package of the write phase for a scheduling migration by commit instance, and returns the download URL of the result package. This allows you to view the complete batch write result details offline. The write result package and the transform result package share the same export capability with consistent field definitions.
   * ## Request description
   * - `instanceId` is required. It specifies the commit instance identity for which to export the result package. You can obtain this identity from the list commit instances operation.
   * - Each invocation exports the result package for only one instance. To export result packages for multiple instances, invoke this operation separately for each instance.
   * ## Response description
   * Returns a single-value response. `data` contains the result package URL (character string). Use this URL to download the complete result file. If `success` is `false`, use `errCode` and `errMessage` to identify the failure cause. `requestId` can be used to troubleshoot the invocation.
   * 
   * @param request - GetBwmMigrationTaskWriterResultPackageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBwmMigrationTaskWriterResultPackageResponse
   */
  async getBwmMigrationTaskWriterResultPackageWithOptions(request: $_model.GetBwmMigrationTaskWriterResultPackageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetBwmMigrationTaskWriterResultPackageResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBwmMigrationTaskWriterResultPackage",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/api/bwm/task/migration/write/result/export/package`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBwmMigrationTaskWriterResultPackageResponse>(await this.callApi(params, req, runtime), new $_model.GetBwmMigrationTaskWriterResultPackageResponse({}));
  }

  /**
   * Exports the result package of a write task by instance ID for offline viewing of complete batch write results.
   * 
   * @remarks
   * ## Operation description
   * Exports the result package of the write phase for a scheduling migration by commit instance, and returns the download URL of the result package. This allows you to view the complete batch write result details offline. The write result package and the transform result package share the same export capability with consistent field definitions.
   * ## Request description
   * - `instanceId` is required. It specifies the commit instance identity for which to export the result package. You can obtain this identity from the list commit instances operation.
   * - Each invocation exports the result package for only one instance. To export result packages for multiple instances, invoke this operation separately for each instance.
   * ## Response description
   * Returns a single-value response. `data` contains the result package URL (character string). Use this URL to download the complete result file. If `success` is `false`, use `errCode` and `errMessage` to identify the failure cause. `requestId` can be used to troubleshoot the invocation.
   * 
   * @param request - GetBwmMigrationTaskWriterResultPackageRequest
   * @returns GetBwmMigrationTaskWriterResultPackageResponse
   */
  async getBwmMigrationTaskWriterResultPackage(request: $_model.GetBwmMigrationTaskWriterResultPackageRequest): Promise<$_model.GetBwmMigrationTaskWriterResultPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getBwmMigrationTaskWriterResultPackageWithOptions(request, headers, runtime);
  }

  /**
   * Performs a paged query on the details of workflows in a write (or publish) report by instance ID with paging. Supports filtering by workflow name.
   * 
   * @remarks
   * ## Operation description
   * Performs a paged query on workflow details in a write report by commit instance with paging. Supports filtering by name. Use this operation to verify the commit status, target workflow identity, and failure reason for each workflow on the target side. This operation is shared by write reports and publish reports.
   * ## Request description
   * - `instanceId` is required and specifies the commit instance identity.
   * - `workflowName` is optional and filters by workflow name to quickly locate a specific workflow within an instance.
   * - `pageIndex` and `pageSize` are optional. The default values are 1 and 10.
   * ## Response description
   * Returns a paginated response: `totalCount` is the total number of workflows that match the filter conditions, and `data` contains the details of the current page. Each element in the list contains the source workflow identifier and name (`workflowId`, `workflowName`), the scheduling expression `cron`, the node count `taskNodeCount`, the submit status `submitStatus` (WRT_INIT: submit not started, WRT_RUN: submitting, WRT_SUCC: all submitted successfully, WRT_FAIL: all submissions failed, WRT_PART_FAIL: some submissions failed, DPY_SUCC: published successfully, DPY_FAIL: publish failed), the submit failure message `submitDetail`, and the target workflow name and identifier (`targetWorkflowName`, `targetWorkflowId`).
   * 
   * @param request - GetBwmMigrationTaskWriterWorkflowListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBwmMigrationTaskWriterWorkflowListResponse
   */
  async getBwmMigrationTaskWriterWorkflowListWithOptions(request: $_model.GetBwmMigrationTaskWriterWorkflowListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetBwmMigrationTaskWriterWorkflowListResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.workflowName)) {
      query["workflowName"] = request.workflowName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBwmMigrationTaskWriterWorkflowList",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/api/bwm/task/migration/write/result/workflow/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBwmMigrationTaskWriterWorkflowListResponse>(await this.callApi(params, req, runtime), new $_model.GetBwmMigrationTaskWriterWorkflowListResponse({}));
  }

  /**
   * Performs a paged query on the details of workflows in a write (or publish) report by instance ID with paging. Supports filtering by workflow name.
   * 
   * @remarks
   * ## Operation description
   * Performs a paged query on workflow details in a write report by commit instance with paging. Supports filtering by name. Use this operation to verify the commit status, target workflow identity, and failure reason for each workflow on the target side. This operation is shared by write reports and publish reports.
   * ## Request description
   * - `instanceId` is required and specifies the commit instance identity.
   * - `workflowName` is optional and filters by workflow name to quickly locate a specific workflow within an instance.
   * - `pageIndex` and `pageSize` are optional. The default values are 1 and 10.
   * ## Response description
   * Returns a paginated response: `totalCount` is the total number of workflows that match the filter conditions, and `data` contains the details of the current page. Each element in the list contains the source workflow identifier and name (`workflowId`, `workflowName`), the scheduling expression `cron`, the node count `taskNodeCount`, the submit status `submitStatus` (WRT_INIT: submit not started, WRT_RUN: submitting, WRT_SUCC: all submitted successfully, WRT_FAIL: all submissions failed, WRT_PART_FAIL: some submissions failed, DPY_SUCC: published successfully, DPY_FAIL: publish failed), the submit failure message `submitDetail`, and the target workflow name and identifier (`targetWorkflowName`, `targetWorkflowId`).
   * 
   * @param request - GetBwmMigrationTaskWriterWorkflowListRequest
   * @returns GetBwmMigrationTaskWriterWorkflowListResponse
   */
  async getBwmMigrationTaskWriterWorkflowList(request: $_model.GetBwmMigrationTaskWriterWorkflowListRequest): Promise<$_model.GetBwmMigrationTaskWriterWorkflowListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getBwmMigrationTaskWriterWorkflowListWithOptions(request, headers, runtime);
  }

  /**
   * Starts a schedule import (write) task by task ID to batch import converted workflows into the destination scheduling system.
   * 
   * @remarks
   * ## Operation description
   * Starts the submit (write) action sequence for a scheduling migration task to batch import converted workflows into the destination scheduling system. The start operation is asynchronous: a successful call only indicates that the write process has been triggered. To check the progress, query the submit instance list and workflow details.
   * ## Request description
   * - `taskId` is required and specifies the scheduling migration task ID.
   * - This operation triggers the write sequence for the entire task at once. You do not need to submit workflows one by one.
   * ## Response description
   * The response returns a single value. `data` is a fixed integer value of `0`, which only indicates that the start request has been accepted. It does not indicate that the import is complete or the number of imported workflows. To check the import result, query the submit instance list and workflow details. If `success` is `false`, troubleshoot the issue based on `errCode` and `errMessage`.
   * 
   * @param request - GetBwmMigrationWorkflowSubmitStartRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBwmMigrationWorkflowSubmitStartResponse
   */
  async getBwmMigrationWorkflowSubmitStartWithOptions(request: $_model.GetBwmMigrationWorkflowSubmitStartRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetBwmMigrationWorkflowSubmitStartResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBwmMigrationWorkflowSubmitStart",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/api/bwm/task/migration/submit/start`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBwmMigrationWorkflowSubmitStartResponse>(await this.callApi(params, req, runtime), new $_model.GetBwmMigrationWorkflowSubmitStartResponse({}));
  }

  /**
   * Starts a schedule import (write) task by task ID to batch import converted workflows into the destination scheduling system.
   * 
   * @remarks
   * ## Operation description
   * Starts the submit (write) action sequence for a scheduling migration task to batch import converted workflows into the destination scheduling system. The start operation is asynchronous: a successful call only indicates that the write process has been triggered. To check the progress, query the submit instance list and workflow details.
   * ## Request description
   * - `taskId` is required and specifies the scheduling migration task ID.
   * - This operation triggers the write sequence for the entire task at once. You do not need to submit workflows one by one.
   * ## Response description
   * The response returns a single value. `data` is a fixed integer value of `0`, which only indicates that the start request has been accepted. It does not indicate that the import is complete or the number of imported workflows. To check the import result, query the submit instance list and workflow details. If `success` is `false`, troubleshoot the issue based on `errCode` and `errMessage`.
   * 
   * @param request - GetBwmMigrationWorkflowSubmitStartRequest
   * @returns GetBwmMigrationWorkflowSubmitStartResponse
   */
  async getBwmMigrationWorkflowSubmitStart(request: $_model.GetBwmMigrationWorkflowSubmitStartRequest): Promise<$_model.GetBwmMigrationWorkflowSubmitStartResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getBwmMigrationWorkflowSubmitStartWithOptions(request, headers, runtime);
  }

  /**
   * Calculates and returns the next 5 execute times based on a Cron expression, allowing you to verify that a validation rule is correct before configuring a scheduled data validation task. This is a general-purpose operation that does not require authentication.
   * 
   * @remarks
   * ## Operation description
   * Calculates and returns the next 5 execution times based on a Cron expression. Use this operation to confirm that the expression matches the expected schedule before configuring a scheduling rule for a data validation task. This helps you avoid discovering scheduling errors only after the configuration takes effect.
   * ## Request description
   * - cronRule is required and must be a Cron expression. When passed as a query parameter, replace spaces in the expression with plus signs `+`. For example, `0+0+0+*+*+?` indicates execution at midnight every day.
   * - The server validates the expression first. If the expression is invalid, an error is returned directly without an execution time list.
   * ## Response description
   * The response is a list. The data field contains 5 execution times (strings) sorted in chronological order. If success is `false`, the expression is invalid or the calculation failed. Use errCode and errMessage to troubleshoot. Use requestId to trace the call.
   * 
   * @param request - GetCronExecTimeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCronExecTimeResponse
   */
  async getCronExecTimeWithOptions(request: $_model.GetCronExecTimeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetCronExecTimeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cronRule)) {
      query["cronRule"] = request.cronRule;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCronExecTime",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/dataCheck/task/v3/cron/exeTime`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCronExecTimeResponse>(await this.callApi(params, req, runtime), new $_model.GetCronExecTimeResponse({}));
  }

  /**
   * Calculates and returns the next 5 execute times based on a Cron expression, allowing you to verify that a validation rule is correct before configuring a scheduled data validation task. This is a general-purpose operation that does not require authentication.
   * 
   * @remarks
   * ## Operation description
   * Calculates and returns the next 5 execution times based on a Cron expression. Use this operation to confirm that the expression matches the expected schedule before configuring a scheduling rule for a data validation task. This helps you avoid discovering scheduling errors only after the configuration takes effect.
   * ## Request description
   * - cronRule is required and must be a Cron expression. When passed as a query parameter, replace spaces in the expression with plus signs `+`. For example, `0+0+0+*+*+?` indicates execution at midnight every day.
   * - The server validates the expression first. If the expression is invalid, an error is returned directly without an execution time list.
   * ## Response description
   * The response is a list. The data field contains 5 execution times (strings) sorted in chronological order. If success is `false`, the expression is invalid or the calculation failed. Use errCode and errMessage to troubleshoot. Use requestId to trace the call.
   * 
   * @param request - GetCronExecTimeRequest
   * @returns GetCronExecTimeResponse
   */
  async getCronExecTime(request: $_model.GetCronExecTimeRequest): Promise<$_model.GetCronExecTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCronExecTimeWithOptions(request, headers, runtime);
  }

  /**
   * Queries the table detail configurations of a data validation task by task ID, and returns the tables to be validated, validation scope, and comparison rules.
   * 
   * @remarks
   * ## Operation description
   * Queries the detail configuration list of tables to be validated for a data validation task. All results are returned at once without pagination. Use this operation to view the source tables and destination tables configured for the task, the scope of comparison, and the comparison rules. This is the primary entry point for verifying configurations before executing a validation task.
   * ## Request description
   * - taskId is required. It specifies the ID of the data validation task, which is obtained from the response of the operation that creates a data validation task.
   * - A single call returns all table detail configurations under the specified task. If no table details are configured for the task, an empty list is returned.
   * ## Response description
   * The response is a list. Each element in data represents a table detail configuration, which contains the configuration ID, the associated task and validation type, the data source, table name, fields, partitions, WHERE and GROUP conditions, hints, and comparison keys for both the source and destination. It also contains comparison rule-related fields: totalCountThreshold for the total data volume threshold, groupCountThreshold for the grouped data volume threshold, batchSize for the batch size, algorithm for the validation algorithm, comparator for the comparison type, metricType for the metric type, isFullTableCount for whether full-table comparison is enabled, and isSkipped for whether the configuration is skipped. If success is false, troubleshoot the issue based on errCode and errMessage.
   * 
   * @param request - GetDataCheckConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataCheckConfigResponse
   */
  async getDataCheckConfigWithOptions(request: $_model.GetDataCheckConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataCheckConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataCheckConfig",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/dataCheck/config/v3/getConfig`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataCheckConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetDataCheckConfigResponse({}));
  }

  /**
   * Queries the table detail configurations of a data validation task by task ID, and returns the tables to be validated, validation scope, and comparison rules.
   * 
   * @remarks
   * ## Operation description
   * Queries the detail configuration list of tables to be validated for a data validation task. All results are returned at once without pagination. Use this operation to view the source tables and destination tables configured for the task, the scope of comparison, and the comparison rules. This is the primary entry point for verifying configurations before executing a validation task.
   * ## Request description
   * - taskId is required. It specifies the ID of the data validation task, which is obtained from the response of the operation that creates a data validation task.
   * - A single call returns all table detail configurations under the specified task. If no table details are configured for the task, an empty list is returned.
   * ## Response description
   * The response is a list. Each element in data represents a table detail configuration, which contains the configuration ID, the associated task and validation type, the data source, table name, fields, partitions, WHERE and GROUP conditions, hints, and comparison keys for both the source and destination. It also contains comparison rule-related fields: totalCountThreshold for the total data volume threshold, groupCountThreshold for the grouped data volume threshold, batchSize for the batch size, algorithm for the validation algorithm, comparator for the comparison type, metricType for the metric type, isFullTableCount for whether full-table comparison is enabled, and isSkipped for whether the configuration is skipped. If success is false, troubleshoot the issue based on errCode and errMessage.
   * 
   * @param request - GetDataCheckConfigRequest
   * @returns GetDataCheckConfigResponse
   */
  async getDataCheckConfig(request: $_model.GetDataCheckConfigRequest): Promise<$_model.GetDataCheckConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDataCheckConfigWithOptions(request, headers, runtime);
  }

  /**
   * Queries the overview of a data validation report by validation batch, and returns summary metrics such as the number of validated tables, passed tables, and pass rate.
   * 
   * @remarks
   * ## Operation description
   * Queries the overview of a data validation report by validation batch. The response includes the number of tables validated in this batch, the number of tables that passed, the pass rate, partition-level and field-level statistics, and the report generation status. This operation serves as the primary entry point for viewing validation conclusions. To obtain table-level details, call the report instance or column-level result operations.
   * ## Request description
   * - `batchId` is required. It specifies the ID of the validation job (batch), which is returned by the operation that saves a validation task. Subsequent operations for execution, stopping, rerunning, and reporting all reference the same validation by this ID.
   * ## Response description
   * The response is a single-value object. The `data` field is the overview object: `checkType` indicates the validation type (0: data volume comparison, 1: metric comparison, 2: weak content comparison). `checkResult` indicates the validation result (0: no records, 1: passed, 2: not passed). `reportStatus` indicates the report generation status (0: not generated, 1: generating, 2: generated). `reportGenerateMessage` provides a message about the generation progress. The statistics section includes the number of validated tables, tables with errors, tables that passed, skipped tables and partitions, validated partitions, validated rows and passed rows, pass rate (`passProcess` as a decimal and `passProcessExport` as a percentage string), field-level validation count and pass count, source and destination data source information, associated task identifiers and timestamps, and template information for metric validation scenarios.
   * 
   * @param request - GetDataCheckReportOverviewRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataCheckReportOverviewResponse
   */
  async getDataCheckReportOverviewWithOptions(request: $_model.GetDataCheckReportOverviewRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataCheckReportOverviewResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.batchId)) {
      query["batchId"] = request.batchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataCheckReportOverview",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/dataCheck/report/v3/overview`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataCheckReportOverviewResponse>(await this.callApi(params, req, runtime), new $_model.GetDataCheckReportOverviewResponse({}));
  }

  /**
   * Queries the overview of a data validation report by validation batch, and returns summary metrics such as the number of validated tables, passed tables, and pass rate.
   * 
   * @remarks
   * ## Operation description
   * Queries the overview of a data validation report by validation batch. The response includes the number of tables validated in this batch, the number of tables that passed, the pass rate, partition-level and field-level statistics, and the report generation status. This operation serves as the primary entry point for viewing validation conclusions. To obtain table-level details, call the report instance or column-level result operations.
   * ## Request description
   * - `batchId` is required. It specifies the ID of the validation job (batch), which is returned by the operation that saves a validation task. Subsequent operations for execution, stopping, rerunning, and reporting all reference the same validation by this ID.
   * ## Response description
   * The response is a single-value object. The `data` field is the overview object: `checkType` indicates the validation type (0: data volume comparison, 1: metric comparison, 2: weak content comparison). `checkResult` indicates the validation result (0: no records, 1: passed, 2: not passed). `reportStatus` indicates the report generation status (0: not generated, 1: generating, 2: generated). `reportGenerateMessage` provides a message about the generation progress. The statistics section includes the number of validated tables, tables with errors, tables that passed, skipped tables and partitions, validated partitions, validated rows and passed rows, pass rate (`passProcess` as a decimal and `passProcessExport` as a percentage string), field-level validation count and pass count, source and destination data source information, associated task identifiers and timestamps, and template information for metric validation scenarios.
   * 
   * @param request - GetDataCheckReportOverviewRequest
   * @returns GetDataCheckReportOverviewResponse
   */
  async getDataCheckReportOverview(request: $_model.GetDataCheckReportOverviewRequest): Promise<$_model.GetDataCheckReportOverviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDataCheckReportOverviewWithOptions(request, headers, runtime);
  }

  /**
   * Queries the generation status (not generated, generating, or generated) and generation information of a report for a specified validation batch.
   * 
   * @remarks
   * ## Operation description
   * Queries the generation status of a data validation report by validation batch. Use this operation to poll the progress after triggering report generation. Report generation is an asynchronous process. The report overview and report details operations return complete data only after the status changes to generated.
   * ## Request description
   * - `batchId` is required. It is the validation batch ID, obtained from the response of the ExecDataCheckSaveTask operation.
   * - Each call queries the status of only one batch. When the report is being generated, call this operation repeatedly at intervals to refresh the status.
   * ## Response description
   * Returns a single-value response. `data` is the report generation status code: `0` for not generated, `1` for generating, `2` for generated, and `3` for generation failed. After the status changes to generated, you can query the report overview and details. If the status is generation failed, troubleshoot the issue based on `errCode` and `errMessage`, and re-trigger report generation if necessary.
   * 
   * @param request - GetDataCheckReportStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataCheckReportStatusResponse
   */
  async getDataCheckReportStatusWithOptions(request: $_model.GetDataCheckReportStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataCheckReportStatusResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.batchId)) {
      query["batchId"] = request.batchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataCheckReportStatus",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/dataCheck/report/v3/getReportStatus`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataCheckReportStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetDataCheckReportStatusResponse({}));
  }

  /**
   * Queries the generation status (not generated, generating, or generated) and generation information of a report for a specified validation batch.
   * 
   * @remarks
   * ## Operation description
   * Queries the generation status of a data validation report by validation batch. Use this operation to poll the progress after triggering report generation. Report generation is an asynchronous process. The report overview and report details operations return complete data only after the status changes to generated.
   * ## Request description
   * - `batchId` is required. It is the validation batch ID, obtained from the response of the ExecDataCheckSaveTask operation.
   * - Each call queries the status of only one batch. When the report is being generated, call this operation repeatedly at intervals to refresh the status.
   * ## Response description
   * Returns a single-value response. `data` is the report generation status code: `0` for not generated, `1` for generating, `2` for generated, and `3` for generation failed. After the status changes to generated, you can query the report overview and details. If the status is generation failed, troubleshoot the issue based on `errCode` and `errMessage`, and re-trigger report generation if necessary.
   * 
   * @param request - GetDataCheckReportStatusRequest
   * @returns GetDataCheckReportStatusResponse
   */
  async getDataCheckReportStatus(request: $_model.GetDataCheckReportStatusRequest): Promise<$_model.GetDataCheckReportStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDataCheckReportStatusWithOptions(request, headers, runtime);
  }

  /**
   * Queries the complete configuration of a data validation task by task ID, including data sources, validation type, and scheduling settings.
   * 
   * @remarks
   * ## Operation description
   * Queries the batch-level complete configuration of a data validation task. The response includes the validation type, execution and scheduling settings, comparison granularity and thresholds, batch concurrency, source and destination global parameters, and the table-level detail configurations under the task. Use this operation to verify the overall settings of a task before running the validation.
   * ## Request description
   * - `taskId` is required and specifies the ID of the data validation task.
   * - This operation returns task-level settings and includes the table-level detail configurations in the `dataCheckConfig` array. To retrieve only the table-level details, use the list operation for data validation task configurations.
   * ## Response description
   * The response contains a single-value result. `data` is the task configuration object: `checkType` indicates the validation rule type (0: data volume comparison, 1: metric comparison, 2: weak content comparison, 3: custom comparison, 4: full-text comparison, 5: null rate comparison). `executeType`, `isScheduled`, `cronExp`, `scheduleId`, and `startImmediately` describe the execution method and scheduling settings. `fullTableCount`, `totalCountThreshold`, `groupCountThreshold`, and `concurrency` describe the comparison granularity, data volume thresholds, and batch concurrency. `sourceGlobalParams`, `targetGlobalParams`, and `checkGlobalParams` are the global parameters for the source, destination, and validation service respectively (JSON strings). `scopeFilter` specifies the scope filter conditions. `taskMode` indicates the creation method (0: table-by-table fine-grained, 1: same-schema batch). `batchId` is the current batch identifier, and `dataCheckConfig` is the list of table-level detail configurations under the task.
   * 
   * @param request - GetDataCheckTaskConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataCheckTaskConfigResponse
   */
  async getDataCheckTaskConfigWithOptions(request: $_model.GetDataCheckTaskConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataCheckTaskConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataCheckTaskConfig",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/dataCheck/task/v3/config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataCheckTaskConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetDataCheckTaskConfigResponse({}));
  }

  /**
   * Queries the complete configuration of a data validation task by task ID, including data sources, validation type, and scheduling settings.
   * 
   * @remarks
   * ## Operation description
   * Queries the batch-level complete configuration of a data validation task. The response includes the validation type, execution and scheduling settings, comparison granularity and thresholds, batch concurrency, source and destination global parameters, and the table-level detail configurations under the task. Use this operation to verify the overall settings of a task before running the validation.
   * ## Request description
   * - `taskId` is required and specifies the ID of the data validation task.
   * - This operation returns task-level settings and includes the table-level detail configurations in the `dataCheckConfig` array. To retrieve only the table-level details, use the list operation for data validation task configurations.
   * ## Response description
   * The response contains a single-value result. `data` is the task configuration object: `checkType` indicates the validation rule type (0: data volume comparison, 1: metric comparison, 2: weak content comparison, 3: custom comparison, 4: full-text comparison, 5: null rate comparison). `executeType`, `isScheduled`, `cronExp`, `scheduleId`, and `startImmediately` describe the execution method and scheduling settings. `fullTableCount`, `totalCountThreshold`, `groupCountThreshold`, and `concurrency` describe the comparison granularity, data volume thresholds, and batch concurrency. `sourceGlobalParams`, `targetGlobalParams`, and `checkGlobalParams` are the global parameters for the source, destination, and validation service respectively (JSON strings). `scopeFilter` specifies the scope filter conditions. `taskMode` indicates the creation method (0: table-by-table fine-grained, 1: same-schema batch). `batchId` is the current batch identifier, and `dataCheckConfig` is the list of table-level detail configurations under the task.
   * 
   * @param request - GetDataCheckTaskConfigRequest
   * @returns GetDataCheckTaskConfigResponse
   */
  async getDataCheckTaskConfig(request: $_model.GetDataCheckTaskConfigRequest): Promise<$_model.GetDataCheckTaskConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDataCheckTaskConfigWithOptions(request, headers, runtime);
  }

  /**
   * Lists data validation tasks by condition with paging, with support for filtering by task name, data source, and other dimensions.
   * 
   * @remarks
   * ## Operation description
   * Lists data validation tasks by condition with paging, with support for combined filtering by task name, validation type, execute status, validation result, scheduling status, template name, and creation or update time range. The response includes the execution progress, validation statistics, and data source and engine information for both the source and destination of each task. This operation serves as the task overview entry point for data validation capabilities.
   * ## Request description
   * - The request body is a JSON object in which all fields are optional. If no filter conditions are specified, all tasks visible to the current user are returned.
   * - `taskName` and `templateName` support fuzzy match. The server converts `templateName` into a list of template IDs before filtering.
   * - `checkType`, `execStatus`, `checkResult`, and `isScheduled` filter by exact enum values. `createStartTime` and `createEndTime`, `updateStartTime` and `updateEndTime` define time ranges in the format YYYY-MM-DD HH:MM:SS.
   * - `pageIndex` and `pageSize` control pagination. Default values are 1 and 10.
   * ## Response description
   * The response is paginated: `totalCount` indicates the total number of tasks that match the filter conditions, `pageIndex` and `pageSize` echo the pagination parameters of the current request, and `data` contains the task list for the current page. Each list element includes the task ID and name, creation mode `taskMode`, validation type `checkType`, execution status `execStatus`, execution type `executeType`, validation result `checkResult`, execution progress `process`, pass rate `passProcess`, number of validated tables and the counts of abnormal, successful, and skipped tables, latest batch IDs (`lastBatchId` and `lastFinishedId`), scheduling switch, start and end times, execution duration, creation and modification times, report time and title, error message `errorMsg`, as well as data source and validation engine information for both the source and destination and the validation template used.
   * 
   * @param request - GetDataCheckTaskListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataCheckTaskListResponse
   */
  async getDataCheckTaskListWithOptions(request: $_model.GetDataCheckTaskListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataCheckTaskListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.checkResult)) {
      body["checkResult"] = request.checkResult;
    }

    if (!$dara.isNull(request.checkType)) {
      body["checkType"] = request.checkType;
    }

    if (!$dara.isNull(request.createEndTime)) {
      body["createEndTime"] = request.createEndTime;
    }

    if (!$dara.isNull(request.createStartTime)) {
      body["createStartTime"] = request.createStartTime;
    }

    if (!$dara.isNull(request.execStatus)) {
      body["execStatus"] = request.execStatus;
    }

    if (!$dara.isNull(request.isScheduled)) {
      body["isScheduled"] = request.isScheduled;
    }

    if (!$dara.isNull(request.pageIndex)) {
      body["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.taskName)) {
      body["taskName"] = request.taskName;
    }

    if (!$dara.isNull(request.templateName)) {
      body["templateName"] = request.templateName;
    }

    if (!$dara.isNull(request.updateEndTime)) {
      body["updateEndTime"] = request.updateEndTime;
    }

    if (!$dara.isNull(request.updateStartTime)) {
      body["updateStartTime"] = request.updateStartTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataCheckTaskList",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/dataCheck/task/v3/find`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataCheckTaskListResponse>(await this.callApi(params, req, runtime), new $_model.GetDataCheckTaskListResponse({}));
  }

  /**
   * Lists data validation tasks by condition with paging, with support for filtering by task name, data source, and other dimensions.
   * 
   * @remarks
   * ## Operation description
   * Lists data validation tasks by condition with paging, with support for combined filtering by task name, validation type, execute status, validation result, scheduling status, template name, and creation or update time range. The response includes the execution progress, validation statistics, and data source and engine information for both the source and destination of each task. This operation serves as the task overview entry point for data validation capabilities.
   * ## Request description
   * - The request body is a JSON object in which all fields are optional. If no filter conditions are specified, all tasks visible to the current user are returned.
   * - `taskName` and `templateName` support fuzzy match. The server converts `templateName` into a list of template IDs before filtering.
   * - `checkType`, `execStatus`, `checkResult`, and `isScheduled` filter by exact enum values. `createStartTime` and `createEndTime`, `updateStartTime` and `updateEndTime` define time ranges in the format YYYY-MM-DD HH:MM:SS.
   * - `pageIndex` and `pageSize` control pagination. Default values are 1 and 10.
   * ## Response description
   * The response is paginated: `totalCount` indicates the total number of tasks that match the filter conditions, `pageIndex` and `pageSize` echo the pagination parameters of the current request, and `data` contains the task list for the current page. Each list element includes the task ID and name, creation mode `taskMode`, validation type `checkType`, execution status `execStatus`, execution type `executeType`, validation result `checkResult`, execution progress `process`, pass rate `passProcess`, number of validated tables and the counts of abnormal, successful, and skipped tables, latest batch IDs (`lastBatchId` and `lastFinishedId`), scheduling switch, start and end times, execution duration, creation and modification times, report time and title, error message `errorMsg`, as well as data source and validation engine information for both the source and destination and the validation template used.
   * 
   * @param request - GetDataCheckTaskListRequest
   * @returns GetDataCheckTaskListResponse
   */
  async getDataCheckTaskList(request: $_model.GetDataCheckTaskListRequest): Promise<$_model.GetDataCheckTaskListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDataCheckTaskListWithOptions(request, headers, runtime);
  }

  /**
   * Queries the detailed configuration of a metric check template by template ID and returns the metric definitions included in the template.
   * 
   * @remarks
   * ## Operation description
   * Queries the detailed configuration of a data validation template by template ID. The response includes the basic template information, the overwrite scope of data sources and DPI engines, and the definitions of various check rules under the template. You can use this operation to view, reuse, or modify a configured set of check rules.
   * ## Request description
   * - `templateId` is required. It specifies the check template ID, which can be obtained from the list templates operation.
   * - Each call returns the details of only one template.
   * ## Response description
   * The response is a single-value response. `data` is the template details object: `templateName` and `templateDesc` are the template name and description. `checkType` is the check rule type (0: data volume comparison, 1: metric comparison, 2: weak content comparison, 3: custom comparison, 4: full-text comparison, 5: null rate comparison). `checkTypeExport` is the Chinese name of the check type. `dsEngineRels` lists the data source types and check engine types covered by the template. The rule section varies by `checkType`: metric comparison (1) uses `basicMetricRules` and `complexMetricRules`, which correspond to metric rules for native and composite data types respectively, and `metricRules` is the list of metric rules. Weak content comparison (2) uses `weakContentRule`. Full-text comparison (4) uses `fulltextRule`. Null rate comparison (5) uses `nullRules`.
   * 
   * @param request - GetDataCheckTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataCheckTemplateResponse
   */
  async getDataCheckTemplateWithOptions(request: $_model.GetDataCheckTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataCheckTemplateResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.templateId)) {
      query["templateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataCheckTemplate",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/dataCheck/template/v3/get`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataCheckTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetDataCheckTemplateResponse({}));
  }

  /**
   * Queries the detailed configuration of a metric check template by template ID and returns the metric definitions included in the template.
   * 
   * @remarks
   * ## Operation description
   * Queries the detailed configuration of a data validation template by template ID. The response includes the basic template information, the overwrite scope of data sources and DPI engines, and the definitions of various check rules under the template. You can use this operation to view, reuse, or modify a configured set of check rules.
   * ## Request description
   * - `templateId` is required. It specifies the check template ID, which can be obtained from the list templates operation.
   * - Each call returns the details of only one template.
   * ## Response description
   * The response is a single-value response. `data` is the template details object: `templateName` and `templateDesc` are the template name and description. `checkType` is the check rule type (0: data volume comparison, 1: metric comparison, 2: weak content comparison, 3: custom comparison, 4: full-text comparison, 5: null rate comparison). `checkTypeExport` is the Chinese name of the check type. `dsEngineRels` lists the data source types and check engine types covered by the template. The rule section varies by `checkType`: metric comparison (1) uses `basicMetricRules` and `complexMetricRules`, which correspond to metric rules for native and composite data types respectively, and `metricRules` is the list of metric rules. Weak content comparison (2) uses `weakContentRule`. Full-text comparison (4) uses `fulltextRule`. Null rate comparison (5) uses `nullRules`.
   * 
   * @param request - GetDataCheckTemplateRequest
   * @returns GetDataCheckTemplateResponse
   */
  async getDataCheckTemplate(request: $_model.GetDataCheckTemplateRequest): Promise<$_model.GetDataCheckTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDataCheckTemplateWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of data validation templates with paging. Supports filtering by check type, template name, and whether the template is built-in. General node templates can be downloaded without authentication.
   * 
   * @remarks
   * ## Operation description
   * Queries a paginated list of data validation templates. Supports filtering by check type, template name, and whether the template is built-in. Use this operation to select an existing template when creating a validation task, or to view available built-in and custom templates.
   * ## Request description
   * - All parameters are optional. checkType filters by validation rule type (0: data volume comparison, 1: metric comparison, 2: weak content comparison, 3: custom comparison, 4: full-text comparison, 5: null rate comparison). templateName filters by template name. isBuiltin distinguishes built-in templates (1) from custom templates (0).
   * - pageSize, pageIndex, orderBy, orderDirection, groupBy, and needTotalCount are common query parameters that control pagination, sorting, and whether to return the total count.
   * - idList and isAdmin are legacy parameters. isAdmin is deprecated, and passing idList does not affect query results. Neither parameter needs to be used.
   * ## Response description
   * The response contains a list. Each element in data represents a template and includes the template ID and name, the check type checkType and its display name checkTypeExport, the covered data source types dsTypes and validation engine types engineTypes, whether the template is built-in isBuiltin, the template description templateDesc, the modification time gmtModified, and whether the template is referenced by a validation task isUsedByTask. The response body returns only the list itself and does not include the total record count or pagination parameters.
   * 
   * @param tmpReq - GetDataCheckTemplateListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataCheckTemplateListResponse
   */
  async getDataCheckTemplateListWithOptions(tmpReq: $_model.GetDataCheckTemplateListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataCheckTemplateListResponse> {
    tmpReq.validate();
    let request = new $_model.GetDataCheckTemplateListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.idList)) {
      request.idListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.idList, "idList", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.checkType)) {
      query["checkType"] = request.checkType;
    }

    if (!$dara.isNull(request.groupBy)) {
      query["groupBy"] = request.groupBy;
    }

    if (!$dara.isNull(request.idListShrink)) {
      query["idList"] = request.idListShrink;
    }

    if (!$dara.isNull(request.isAdmin)) {
      query["isAdmin"] = request.isAdmin;
    }

    if (!$dara.isNull(request.isBuiltin)) {
      query["isBuiltin"] = request.isBuiltin;
    }

    if (!$dara.isNull(request.needTotalCount)) {
      query["needTotalCount"] = request.needTotalCount;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      query["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.requestId)) {
      query["requestId"] = request.requestId;
    }

    if (!$dara.isNull(request.templateName)) {
      query["templateName"] = request.templateName;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataCheckTemplateList",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/dataCheck/template/v3/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataCheckTemplateListResponse>(await this.callApi(params, req, runtime), new $_model.GetDataCheckTemplateListResponse({}));
  }

  /**
   * Queries a list of data validation templates with paging. Supports filtering by check type, template name, and whether the template is built-in. General node templates can be downloaded without authentication.
   * 
   * @remarks
   * ## Operation description
   * Queries a paginated list of data validation templates. Supports filtering by check type, template name, and whether the template is built-in. Use this operation to select an existing template when creating a validation task, or to view available built-in and custom templates.
   * ## Request description
   * - All parameters are optional. checkType filters by validation rule type (0: data volume comparison, 1: metric comparison, 2: weak content comparison, 3: custom comparison, 4: full-text comparison, 5: null rate comparison). templateName filters by template name. isBuiltin distinguishes built-in templates (1) from custom templates (0).
   * - pageSize, pageIndex, orderBy, orderDirection, groupBy, and needTotalCount are common query parameters that control pagination, sorting, and whether to return the total count.
   * - idList and isAdmin are legacy parameters. isAdmin is deprecated, and passing idList does not affect query results. Neither parameter needs to be used.
   * ## Response description
   * The response contains a list. Each element in data represents a template and includes the template ID and name, the check type checkType and its display name checkTypeExport, the covered data source types dsTypes and validation engine types engineTypes, whether the template is built-in isBuiltin, the template description templateDesc, the modification time gmtModified, and whether the template is referenced by a validation task isUsedByTask. The response body returns only the list itself and does not include the total record count or pagination parameters.
   * 
   * @param request - GetDataCheckTemplateListRequest
   * @returns GetDataCheckTemplateListResponse
   */
  async getDataCheckTemplateList(request: $_model.GetDataCheckTemplateListRequest): Promise<$_model.GetDataCheckTemplateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDataCheckTemplateListWithOptions(request, headers, runtime);
  }

  /**
   * Queries the asynchronous execution result of a workflow conversion by submit credential. This is a Skill internal operation.
   * 
   * @remarks
   * ## Operation description
   * This is an internal operation for querying the asynchronous result of a workflow conversion. After the submit operation PostInnerConvert accepts a conversion task and returns the acceptance result, this operation queries the asynchronous execution result of that conversion by using the same request credential. This operation serves as the polling side in the submit-and-poll invocation pattern.
   * ## Request description
   * The request body is a JSON object. The taskId parameter specifies the ID of the conversion task to query, which is the task identifier associated with the conversion task at the time of submission.
   * ## Response description
   * The success parameter indicates whether the call is successful. The data parameter contains the asynchronous execution result of the conversion task in string format. In specific error scenarios such as multiple data sources with the same name, the data parameter carries the error detail text. If the call fails, troubleshoot the issue based on errCode and errMessage. The requestId parameter uniquely identifies the call. Provide this value when troubleshooting issues.
   * 
   * @param request - GetInnerConvertAsyncResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInnerConvertAsyncResultResponse
   */
  async getInnerConvertAsyncResultWithOptions(request: $_model.GetInnerConvertAsyncResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetInnerConvertAsyncResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInnerConvertAsyncResult",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/api/skill/inner/v1/convert/async-result`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInnerConvertAsyncResultResponse>(await this.callApi(params, req, runtime), new $_model.GetInnerConvertAsyncResultResponse({}));
  }

  /**
   * Queries the asynchronous execution result of a workflow conversion by submit credential. This is a Skill internal operation.
   * 
   * @remarks
   * ## Operation description
   * This is an internal operation for querying the asynchronous result of a workflow conversion. After the submit operation PostInnerConvert accepts a conversion task and returns the acceptance result, this operation queries the asynchronous execution result of that conversion by using the same request credential. This operation serves as the polling side in the submit-and-poll invocation pattern.
   * ## Request description
   * The request body is a JSON object. The taskId parameter specifies the ID of the conversion task to query, which is the task identifier associated with the conversion task at the time of submission.
   * ## Response description
   * The success parameter indicates whether the call is successful. The data parameter contains the asynchronous execution result of the conversion task in string format. In specific error scenarios such as multiple data sources with the same name, the data parameter carries the error detail text. If the call fails, troubleshoot the issue based on errCode and errMessage. The requestId parameter uniquely identifies the call. Provide this value when troubleshooting issues.
   * 
   * @param request - GetInnerConvertAsyncResultRequest
   * @returns GetInnerConvertAsyncResultResponse
   */
  async getInnerConvertAsyncResult(request: $_model.GetInnerConvertAsyncResultRequest): Promise<$_model.GetInnerConvertAsyncResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInnerConvertAsyncResultWithOptions(request, headers, runtime);
  }

  /**
   * Queries the asynchronous execution result of a source workflow read operation by submit credential. This is a Skill internal operation.
   * 
   * @remarks
   * ## Operation description
   * This is an internal operation for querying the asynchronous result of a workflow read operation. After the submit operation PostInnerReader accepts a source workflow read task and returns an acceptance result, this operation queries the asynchronous execution result of that read operation by using the same request credential. This operation serves as the polling side in the submit-and-poll invocation pattern.
   * ## Request description
   * The request body is a JSON object. The dataSourceName parameter specifies the name of the data source to which the read task belongs. The read task uses this field as its dimension identifier.
   * ## Response description
   * The success field indicates whether the call is successful. The data field contains the asynchronous execution result of the read task in string format. If the call fails, use errCode and errMessage to troubleshoot the issue. The requestId field uniquely identifies the call. Provide this value when troubleshooting issues.
   * 
   * @param request - GetInnerReadAsyncResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInnerReadAsyncResultResponse
   */
  async getInnerReadAsyncResultWithOptions(request: $_model.GetInnerReadAsyncResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetInnerReadAsyncResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataSourceName)) {
      body["dataSourceName"] = request.dataSourceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInnerReadAsyncResult",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/api/skill/inner/v1/read/async-result`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInnerReadAsyncResultResponse>(await this.callApi(params, req, runtime), new $_model.GetInnerReadAsyncResultResponse({}));
  }

  /**
   * Queries the asynchronous execution result of a source workflow read operation by submit credential. This is a Skill internal operation.
   * 
   * @remarks
   * ## Operation description
   * This is an internal operation for querying the asynchronous result of a workflow read operation. After the submit operation PostInnerReader accepts a source workflow read task and returns an acceptance result, this operation queries the asynchronous execution result of that read operation by using the same request credential. This operation serves as the polling side in the submit-and-poll invocation pattern.
   * ## Request description
   * The request body is a JSON object. The dataSourceName parameter specifies the name of the data source to which the read task belongs. The read task uses this field as its dimension identifier.
   * ## Response description
   * The success field indicates whether the call is successful. The data field contains the asynchronous execution result of the read task in string format. If the call fails, use errCode and errMessage to troubleshoot the issue. The requestId field uniquely identifies the call. Provide this value when troubleshooting issues.
   * 
   * @param request - GetInnerReadAsyncResultRequest
   * @returns GetInnerReadAsyncResultResponse
   */
  async getInnerReadAsyncResult(request: $_model.GetInnerReadAsyncResultRequest): Promise<$_model.GetInnerReadAsyncResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInnerReadAsyncResultWithOptions(request, headers, runtime);
  }

  /**
   * Queries the registration and running status of a user-side Agent by agent type and skill name to determine whether the local environment is ready.
   * 
   * @remarks
   * ## Operation description
   * Queries the registration and running status of a user-side Agent. Call this operation before using capabilities that depend on a local Agent, such as data validation, to confirm that the Agent is ready. This helps avoid task execution failures caused by an unregistered or stopped Agent.
   * ## Request description
   * - `agentType`: required. Specifies the Agent type. Set this parameter to `0` for data validation (the only type currently supported) or `1` for metadata.
   * - `skillName`: optional. The skill name.
   * ## Response description
   * Returns a single-value response. `data` contains the status information of the Agent as a string. If `success` is `false`, use `errCode` and `errMessage` to identify the failure cause. Use `requestId` to troubleshoot the call.
   * 
   * @param request - GetLhmAgentStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLhmAgentStatusResponse
   */
  async getLhmAgentStatusWithOptions(request: $_model.GetLhmAgentStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetLhmAgentStatusResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentType)) {
      query["agentType"] = request.agentType;
    }

    if (!$dara.isNull(request.skillName)) {
      query["skillName"] = request.skillName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLhmAgentStatus",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/api/bigdata/lhm/agent/getAgentStatus`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLhmAgentStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetLhmAgentStatusResponse({}));
  }

  /**
   * Queries the registration and running status of a user-side Agent by agent type and skill name to determine whether the local environment is ready.
   * 
   * @remarks
   * ## Operation description
   * Queries the registration and running status of a user-side Agent. Call this operation before using capabilities that depend on a local Agent, such as data validation, to confirm that the Agent is ready. This helps avoid task execution failures caused by an unregistered or stopped Agent.
   * ## Request description
   * - `agentType`: required. Specifies the Agent type. Set this parameter to `0` for data validation (the only type currently supported) or `1` for metadata.
   * - `skillName`: optional. The skill name.
   * ## Response description
   * Returns a single-value response. `data` contains the status information of the Agent as a string. If `success` is `false`, use `errCode` and `errMessage` to identify the failure cause. Use `requestId` to troubleshoot the call.
   * 
   * @param request - GetLhmAgentStatusRequest
   * @returns GetLhmAgentStatusResponse
   */
  async getLhmAgentStatus(request: $_model.GetLhmAgentStatusRequest): Promise<$_model.GetLhmAgentStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLhmAgentStatusWithOptions(request, headers, runtime);
  }

  /**
   * Queries the status of a user\\"s DataWorks resource groups by region to determine whether available execution resources exist for migration tasks.
   * 
   * @remarks
   * ## Operation description
   * Queries the status of a user\\"s DataWorks resource groups by region. Use this operation before submitting a migration or validation task to confirm whether available execution resources exist in the specified region.
   * ## Request description
   * - regionId is required. Set this parameter to a region ID, such as cn-hangzhou.
   * - Each call queries only one region. For cross-region deployments, query each region separately.
   * ## Response description
   * The response returns a single value. The data field contains the status information of the resource group in the specified region as a string. If success is false, use errCode and errMessage to identify the cause of the failure. Use requestId to troubleshoot the call.
   * 
   * @param request - GetLhmDWResourceGroupStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLhmDWResourceGroupStatusResponse
   */
  async getLhmDWResourceGroupStatusWithOptions(request: $_model.GetLhmDWResourceGroupStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetLhmDWResourceGroupStatusResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLhmDWResourceGroupStatus",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/api/bigdata/lhm/resource/getDWResourceGroupStatus`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLhmDWResourceGroupStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetLhmDWResourceGroupStatusResponse({}));
  }

  /**
   * Queries the status of a user\\"s DataWorks resource groups by region to determine whether available execution resources exist for migration tasks.
   * 
   * @remarks
   * ## Operation description
   * Queries the status of a user\\"s DataWorks resource groups by region. Use this operation before submitting a migration or validation task to confirm whether available execution resources exist in the specified region.
   * ## Request description
   * - regionId is required. Set this parameter to a region ID, such as cn-hangzhou.
   * - Each call queries only one region. For cross-region deployments, query each region separately.
   * ## Response description
   * The response returns a single value. The data field contains the status information of the resource group in the specified region as a string. If success is false, use errCode and errMessage to identify the cause of the failure. Use requestId to troubleshoot the call.
   * 
   * @param request - GetLhmDWResourceGroupStatusRequest
   * @returns GetLhmDWResourceGroupStatusResponse
   */
  async getLhmDWResourceGroupStatus(request: $_model.GetLhmDWResourceGroupStatusRequest): Promise<$_model.GetLhmDWResourceGroupStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLhmDWResourceGroupStatusWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves temporary OSS upload credentials (STS), including the AccessKey, security token, bucket, upload directory, and expiration time.
   * 
   * @remarks
   * ## Operation description
   * Retrieves temporary authorization credentials required for direct file uploads to Object Storage Service (OSS). The response includes a temporary AccessKey, security token, access endpoint, bucket, allowed upload directory prefix, upload policy and signature, and expiration time. These credentials enable the client to upload files by using form-based direct upload (PostObject) without storing long-term keys on the client.
   * ## Request description
   * - This operation has no request parameters. The credential ownership and allowed upload directory are automatically generated by the server based on the current user and region.
   * ## Response description
   * The response returns a single value. `data` is the temporary credential object: `ak` and `securityToken` are the temporary identity credentials. `endpoint` and `bucket` specify the upload target. `dir` is the allowed upload directory prefix (ending with a forward slash). The key of the uploaded object must start with this prefix. Otherwise, the request is rejected. `policy` is a Base64-encoded upload policy that defines constraints such as file size and path prefix. The decoded value is a JSON string. `signature` is the signature calculated based on the policy. `expire` is the credential expiration timestamp in Unix seconds. Before use, verify whether the credential has expired. If it has expired, call this operation again to obtain new credentials. `ak` and `securityToken` are sensitive credentials. Do not hard-code them in your code or print them to logs.
   * 
   * @param request - GetMetaOssTempKeyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMetaOssTempKeyResponse
   */
  async getMetaOssTempKeyWithOptions(request: $_model.GetMetaOssTempKeyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMetaOssTempKeyResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMetaOssTempKey",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/api/v2/meta/data-component/okss-services/file-job/sts`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMetaOssTempKeyResponse>(await this.callApi(params, req, runtime), new $_model.GetMetaOssTempKeyResponse({}));
  }

  /**
   * Retrieves temporary OSS upload credentials (STS), including the AccessKey, security token, bucket, upload directory, and expiration time.
   * 
   * @remarks
   * ## Operation description
   * Retrieves temporary authorization credentials required for direct file uploads to Object Storage Service (OSS). The response includes a temporary AccessKey, security token, access endpoint, bucket, allowed upload directory prefix, upload policy and signature, and expiration time. These credentials enable the client to upload files by using form-based direct upload (PostObject) without storing long-term keys on the client.
   * ## Request description
   * - This operation has no request parameters. The credential ownership and allowed upload directory are automatically generated by the server based on the current user and region.
   * ## Response description
   * The response returns a single value. `data` is the temporary credential object: `ak` and `securityToken` are the temporary identity credentials. `endpoint` and `bucket` specify the upload target. `dir` is the allowed upload directory prefix (ending with a forward slash). The key of the uploaded object must start with this prefix. Otherwise, the request is rejected. `policy` is a Base64-encoded upload policy that defines constraints such as file size and path prefix. The decoded value is a JSON string. `signature` is the signature calculated based on the policy. `expire` is the credential expiration timestamp in Unix seconds. Before use, verify whether the credential has expired. If it has expired, call this operation again to obtain new credentials. `ak` and `securityToken` are sensitive credentials. Do not hard-code them in your code or print them to logs.
   * 
   * @param request - GetMetaOssTempKeyRequest
   * @returns GetMetaOssTempKeyResponse
   */
  async getMetaOssTempKey(request: $_model.GetMetaOssTempKeyRequest): Promise<$_model.GetMetaOssTempKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMetaOssTempKeyWithOptions(request, headers, runtime);
  }

  /**
   * Queries the execution progress of an SQL conversion task by task ID and returns the total count, completed count, success count, and completion percentage.
   * 
   * @remarks
   * ## Operation description
   * Queries the execution progress of an SQL conversion task by task ID and returns the total number of scripts, the number of scripts being converted, the number of completed scripts, the number of failed scripts, and the completion percentage. Use this operation to poll the progress after submitting an asynchronous conversion task and determine when to retrieve the conversion results.
   * ## Request description
   * - taskId is required. It specifies the SQL conversion task ID, which is obtained from the response of the operation that creates the conversion task.
   * - You can call this operation repeatedly during the conversion process to refresh the progress.
   * ## Response description
   * The response returns a single-value result. The data field is a progress object: total indicates the total number of scripts, running indicates the number of scripts being converted, finish indicates the number of completed scripts, fail indicates the number of failed scripts, and percent indicates the completion percentage (for example, 66.67 indicates that approximately two-thirds of the scripts are completed). After the task is complete, call the query conversion results operation to retrieve the conversion details for each script.
   * 
   * @param request - GetSqlConversionProgressRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSqlConversionProgressResponse
   */
  async getSqlConversionProgressWithOptions(request: $_model.GetSqlConversionProgressRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSqlConversionProgressResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSqlConversionProgress",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/api/bigdata/jobMigrate/sqlTranslator/task/api/progress`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSqlConversionProgressResponse>(await this.callApi(params, req, runtime), new $_model.GetSqlConversionProgressResponse({}));
  }

  /**
   * Queries the execution progress of an SQL conversion task by task ID and returns the total count, completed count, success count, and completion percentage.
   * 
   * @remarks
   * ## Operation description
   * Queries the execution progress of an SQL conversion task by task ID and returns the total number of scripts, the number of scripts being converted, the number of completed scripts, the number of failed scripts, and the completion percentage. Use this operation to poll the progress after submitting an asynchronous conversion task and determine when to retrieve the conversion results.
   * ## Request description
   * - taskId is required. It specifies the SQL conversion task ID, which is obtained from the response of the operation that creates the conversion task.
   * - You can call this operation repeatedly during the conversion process to refresh the progress.
   * ## Response description
   * The response returns a single-value result. The data field is a progress object: total indicates the total number of scripts, running indicates the number of scripts being converted, finish indicates the number of completed scripts, fail indicates the number of failed scripts, and percent indicates the completion percentage (for example, 66.67 indicates that approximately two-thirds of the scripts are completed). After the task is complete, call the query conversion results operation to retrieve the conversion details for each script.
   * 
   * @param request - GetSqlConversionProgressRequest
   * @returns GetSqlConversionProgressResponse
   */
  async getSqlConversionProgress(request: $_model.GetSqlConversionProgressRequest): Promise<$_model.GetSqlConversionProgressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSqlConversionProgressWithOptions(request, headers, runtime);
  }

  /**
   * Queries the result details of an SQL conversion task and returns the source statement, target statement, and conversion status of each SQL statement.
   * 
   * @remarks
   * ## Operation description
   * Queries the result details of an SQL conversion task by using paging. Returns the original content, transformed content, transform status, failure reason, and table name mapping for each script. Use this operation to verify transform results one by one after a transform task is complete, or to identify scripts that failed to transform.
   * ## Request description
   * - The request body is a JSON object. `taskId` specifies the ID of the SQL conversion task to query, which is obtained from the response of the create conversion task operation. `page` and `size` specify the page number and the number of entries per page.
   * - Conversion is an asynchronous process. Query the conversion progress first to confirm that the task is complete before calling this operation to retrieve details. If you call this operation while the conversion is still in progress, records with a converting status are returned.
   * ## Response description
   * A paginated response is returned. `totalCount` is the total number of scripts that meet the conditions. `pageSize` and `pageIndex` echo the pagination parameters of the current request (corresponding to `size` and `page` in the request, respectively). `data` is the list of scripts on the current page. Each element in the list contains the script name and identifier (`scriptName` and `scriptId`), the original script content `sqlSourceContent`, the converted script content `sqlResultContent`, the script conversion status `scriptTransformStatus` (in conversion job scenarios: pass for conversion succeeded, turning for converting, and fail for conversion failed. In some scenarios: success for succeeded, failed for failed, and skipped for skipped), the error reason `errorMessage`, the completion time `finishTime`, and the table name mapping `tableMappingList`. For scripts with a conversion failed status, use `errorMessage` to identify the issue, fix the script, and resubmit it for conversion.
   * 
   * @param request - GetSqlConversionResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSqlConversionResultResponse
   */
  async getSqlConversionResultWithOptions(request: $_model.GetSqlConversionResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSqlConversionResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.page)) {
      body["page"] = request.page;
    }

    if (!$dara.isNull(request.size)) {
      body["size"] = request.size;
    }

    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSqlConversionResult",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/api/bigdata/jobMigrate/sqlTranslator/task/api/result`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSqlConversionResultResponse>(await this.callApi(params, req, runtime), new $_model.GetSqlConversionResultResponse({}));
  }

  /**
   * Queries the result details of an SQL conversion task and returns the source statement, target statement, and conversion status of each SQL statement.
   * 
   * @remarks
   * ## Operation description
   * Queries the result details of an SQL conversion task by using paging. Returns the original content, transformed content, transform status, failure reason, and table name mapping for each script. Use this operation to verify transform results one by one after a transform task is complete, or to identify scripts that failed to transform.
   * ## Request description
   * - The request body is a JSON object. `taskId` specifies the ID of the SQL conversion task to query, which is obtained from the response of the create conversion task operation. `page` and `size` specify the page number and the number of entries per page.
   * - Conversion is an asynchronous process. Query the conversion progress first to confirm that the task is complete before calling this operation to retrieve details. If you call this operation while the conversion is still in progress, records with a converting status are returned.
   * ## Response description
   * A paginated response is returned. `totalCount` is the total number of scripts that meet the conditions. `pageSize` and `pageIndex` echo the pagination parameters of the current request (corresponding to `size` and `page` in the request, respectively). `data` is the list of scripts on the current page. Each element in the list contains the script name and identifier (`scriptName` and `scriptId`), the original script content `sqlSourceContent`, the converted script content `sqlResultContent`, the script conversion status `scriptTransformStatus` (in conversion job scenarios: pass for conversion succeeded, turning for converting, and fail for conversion failed. In some scenarios: success for succeeded, failed for failed, and skipped for skipped), the error reason `errorMessage`, the completion time `finishTime`, and the table name mapping `tableMappingList`. For scripts with a conversion failed status, use `errorMessage` to identify the issue, fix the script, and resubmit it for conversion.
   * 
   * @param request - GetSqlConversionResultRequest
   * @returns GetSqlConversionResultResponse
   */
  async getSqlConversionResult(request: $_model.GetSqlConversionResultRequest): Promise<$_model.GetSqlConversionResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSqlConversionResultWithOptions(request, headers, runtime);
  }

  /**
   * Parses table-level lineage from a single SQL script and returns the names of upstream and downstream tables referenced by the script.
   * 
   * @remarks
   * ## Operation description
   * Parses table-level lineage from a single SQL script and returns the names of upstream and downstream tables referenced by the script. Use this operation to identify the scope of tables involved in a script before performing batch conversions, or to provide a basis for configuring table name mapping.
   * ## Request description
   * - The request body is a JSON object. `dialect` specifies the SQL dialect used by the script (such as hive). During parsing, the same dialect is used for both the source and target. This operation only performs parsing and does not perform cross-dialect rewriting. `defaultSchema` specifies the default database name, which is used to complete table references in the script that do not explicitly specify a database name. `sourceSqlScriptBase64` specifies the script content to be parsed, which must be Base64-encoded before being passed in. The server decodes the content before parsing.
   * - Parsing is processed as a data query language (DQL) statement. Each call parses only one script.
   * ## Response description
   * A single-value response is returned. `data` is the lineage object. `upstreamTables` is the list of upstream table names. `downstreamTables` is the list of downstream table names. `success` indicates whether the parsing was successful. `errorMsg` provides the reason when parsing fails. When parsing fails, the outer layer also returns an SQL validation error. Use `errCode` and `errMessage` to troubleshoot the issue. Common causes include unparseable script syntax or Base64 decoding failure. `requestId` is used to locate the current call.
   * 
   * @param request - GetSqlTableLineageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSqlTableLineageResponse
   */
  async getSqlTableLineageWithOptions(request: $_model.GetSqlTableLineageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSqlTableLineageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.defaultSchema)) {
      body["defaultSchema"] = request.defaultSchema;
    }

    if (!$dara.isNull(request.dialect)) {
      body["dialect"] = request.dialect;
    }

    if (!$dara.isNull(request.sourceSqlScriptBase64)) {
      body["sourceSqlScriptBase64"] = request.sourceSqlScriptBase64;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSqlTableLineage",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/api/bigdata/sql-translator/open/single/getTableLineage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSqlTableLineageResponse>(await this.callApi(params, req, runtime), new $_model.GetSqlTableLineageResponse({}));
  }

  /**
   * Parses table-level lineage from a single SQL script and returns the names of upstream and downstream tables referenced by the script.
   * 
   * @remarks
   * ## Operation description
   * Parses table-level lineage from a single SQL script and returns the names of upstream and downstream tables referenced by the script. Use this operation to identify the scope of tables involved in a script before performing batch conversions, or to provide a basis for configuring table name mapping.
   * ## Request description
   * - The request body is a JSON object. `dialect` specifies the SQL dialect used by the script (such as hive). During parsing, the same dialect is used for both the source and target. This operation only performs parsing and does not perform cross-dialect rewriting. `defaultSchema` specifies the default database name, which is used to complete table references in the script that do not explicitly specify a database name. `sourceSqlScriptBase64` specifies the script content to be parsed, which must be Base64-encoded before being passed in. The server decodes the content before parsing.
   * - Parsing is processed as a data query language (DQL) statement. Each call parses only one script.
   * ## Response description
   * A single-value response is returned. `data` is the lineage object. `upstreamTables` is the list of upstream table names. `downstreamTables` is the list of downstream table names. `success` indicates whether the parsing was successful. `errorMsg` provides the reason when parsing fails. When parsing fails, the outer layer also returns an SQL validation error. Use `errCode` and `errMessage` to troubleshoot the issue. Common causes include unparseable script syntax or Base64 decoding failure. `requestId` is used to locate the current call.
   * 
   * @param request - GetSqlTableLineageRequest
   * @returns GetSqlTableLineageResponse
   */
  async getSqlTableLineage(request: $_model.GetSqlTableLineageRequest): Promise<$_model.GetSqlTableLineageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSqlTableLineageWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves table metadata information.
   * 
   * @remarks
   * ## Operation description
   * Parses a single SQL script and returns the list of table names referenced in the script. Use this operation before performing a conversion to confirm which tables the script references, facilitating table name mapping preparation or conversion scope verification.
   * ## Request description
   * - The request body is a JSON object. `sourceDialect` and `targetDialect` specify the source and target SQL dialects (such as hive or maxcompute). `sourceSqlScript` is the script content to be parsed. You must Base64-encode the script before passing it in. The server decodes the content before parsing. Passing the raw script directly causes a decoding failure and prevents parsing.
   * - Parsing treats the input as a data query language (DQL) statement. Each call parses only one script.
   * ## Response description
   * The response is a list. `data` is a string array where each item is a table name parsed from the script. If the script contains no table references, an empty list is returned. If parsing fails, a SQL validation error is returned. `errCode` and `errMessage` provide the failure reason. `requestId` identifies the call for troubleshooting.
   * 
   * @param request - GetSqlTransTableMetaInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSqlTransTableMetaInfoResponse
   */
  async getSqlTransTableMetaInfoWithOptions(request: $_model.GetSqlTransTableMetaInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSqlTransTableMetaInfoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sourceDialect)) {
      body["sourceDialect"] = request.sourceDialect;
    }

    if (!$dara.isNull(request.sourceSqlScript)) {
      body["sourceSqlScript"] = request.sourceSqlScript;
    }

    if (!$dara.isNull(request.targetDialect)) {
      body["targetDialect"] = request.targetDialect;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSqlTransTableMetaInfo",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/api/bigdata/sql-translator/open/single/get-table-info`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSqlTransTableMetaInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetSqlTransTableMetaInfoResponse({}));
  }

  /**
   * Retrieves table metadata information.
   * 
   * @remarks
   * ## Operation description
   * Parses a single SQL script and returns the list of table names referenced in the script. Use this operation before performing a conversion to confirm which tables the script references, facilitating table name mapping preparation or conversion scope verification.
   * ## Request description
   * - The request body is a JSON object. `sourceDialect` and `targetDialect` specify the source and target SQL dialects (such as hive or maxcompute). `sourceSqlScript` is the script content to be parsed. You must Base64-encode the script before passing it in. The server decodes the content before parsing. Passing the raw script directly causes a decoding failure and prevents parsing.
   * - Parsing treats the input as a data query language (DQL) statement. Each call parses only one script.
   * ## Response description
   * The response is a list. `data` is a string array where each item is a table name parsed from the script. If the script contains no table references, an empty list is returned. If parsing fails, a SQL validation error is returned. `errCode` and `errMessage` provide the failure reason. `requestId` identifies the call for troubleshooting.
   * 
   * @param request - GetSqlTransTableMetaInfoRequest
   * @returns GetSqlTransTableMetaInfoResponse
   */
  async getSqlTransTableMetaInfo(request: $_model.GetSqlTransTableMetaInfoRequest): Promise<$_model.GetSqlTransTableMetaInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSqlTransTableMetaInfoWithOptions(request, headers, runtime);
  }

  /**
   * Queries the step-level result overview by validation result ID to determine the overall pass status of a single validation step.
   * 
   * @remarks
   * ## Operation description
   * Queries the result overview of a single validation step by validation result ID. The response includes the consistency conclusion, the number of validated and passed fields and metrics, and the table, partition, and metric information for both the source and target. This is useful for quickly determining the overall pass status when drilling down to a specific validation result in a report.
   * ## Request description
   * - `resultId` is required. It is the unique ID of the validation result, obtained from the `resultId` field returned by the validation report query operation.
   * - Each call queries only one validation result. To retrieve field-level comparison details for the result, call the field-level detail operation.
   * ## Response description
   * The response is a single-value object. `data` is the overview object: `resultId` echoes the validation result ID of this query. `status` indicates the step status. Valid values: 0 (created), 1 (running), 2 (completed), 3 (stopped), 4 (canceled). `isConsistent` indicates whether the source and target are consistent. Valid values: 0 (inconsistent), 1 (consistent). `checkColumnCount` and `passColumnCount` indicate the number of validated fields and the number of passed fields. `metricColumnCount` and `metricPassColumnCount` indicate the number of validated metrics and the number of passed metrics. `sourceTable` and `targetTable`, `sourcePtName` and `targetPtName`, `srcMetricName` and `dstMetricName` provide the table names, partition names, and metric names for the source and target respectively. The consistency conclusion and statistics are meaningful only when the step status is completed.
   * 
   * @param request - GetStepResultOverviewRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStepResultOverviewResponse
   */
  async getStepResultOverviewWithOptions(request: $_model.GetStepResultOverviewRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetStepResultOverviewResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resultId)) {
      query["resultId"] = request.resultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStepResultOverview",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/dataCheck/report/v3/result/overview`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStepResultOverviewResponse>(await this.callApi(params, req, runtime), new $_model.GetStepResultOverviewResponse({}));
  }

  /**
   * Queries the step-level result overview by validation result ID to determine the overall pass status of a single validation step.
   * 
   * @remarks
   * ## Operation description
   * Queries the result overview of a single validation step by validation result ID. The response includes the consistency conclusion, the number of validated and passed fields and metrics, and the table, partition, and metric information for both the source and target. This is useful for quickly determining the overall pass status when drilling down to a specific validation result in a report.
   * ## Request description
   * - `resultId` is required. It is the unique ID of the validation result, obtained from the `resultId` field returned by the validation report query operation.
   * - Each call queries only one validation result. To retrieve field-level comparison details for the result, call the field-level detail operation.
   * ## Response description
   * The response is a single-value object. `data` is the overview object: `resultId` echoes the validation result ID of this query. `status` indicates the step status. Valid values: 0 (created), 1 (running), 2 (completed), 3 (stopped), 4 (canceled). `isConsistent` indicates whether the source and target are consistent. Valid values: 0 (inconsistent), 1 (consistent). `checkColumnCount` and `passColumnCount` indicate the number of validated fields and the number of passed fields. `metricColumnCount` and `metricPassColumnCount` indicate the number of validated metrics and the number of passed metrics. `sourceTable` and `targetTable`, `sourcePtName` and `targetPtName`, `srcMetricName` and `dstMetricName` provide the table names, partition names, and metric names for the source and target respectively. The consistency conclusion and statistics are meaningful only when the step status is completed.
   * 
   * @param request - GetStepResultOverviewRequest
   * @returns GetStepResultOverviewResponse
   */
  async getStepResultOverview(request: $_model.GetStepResultOverviewRequest): Promise<$_model.GetStepResultOverviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getStepResultOverviewWithOptions(request, headers, runtime);
  }

  /**
   * Queries field (column) dimension validation details by validation result ID with paging, and returns the comparison results and threshold evaluation for each field between the source and destination.
   * 
   * @remarks
   * ## Operation description
   * Queries field (column) dimension validation details by validation result ID with paging. The response returns the comparison results between the source and destination for each field, the comparison rule used, the expected threshold, and the actual difference. Use this operation to drill down validation conclusions to the field level and identify which column was determined to be inconsistent and by which rule.
   * ## Request description
   * - `resultId` is required. It specifies the validation result ID, which is obtained from the validation report query operation or the step overview operation.
   * - `pageIndex` and `pageSize` are optional. They specify the page number (starting from 1) and the number of entries per page, respectively. The default value of `pageSize` is 10.
   * ## Response description
   * The response is paginated: `totalCount` indicates the total number of fields that meet the conditions, `pageIndex` and `pageSize` echo the pagination parameters of the current request, and `data` contains the field details for the current page. Each element in the list contains the step ID `stepId`, the field name and field type for the source and destination (`srcColumnName`, `srcColumnType`, `dstColumnName`, `dstColumnType`), the metric key and alias for the source and destination (`srcMetricColumn`, `dstMetricColumn`, `srcAlias`, `dstAlias`), the comparison rule `checkRule`, the expected threshold `expectThreshold`, the result values for the source and destination (`srcResult`, `dstResult`), the actual difference `actualThreshold`, the validation result `isConsistent` (0: inconsistent, 1: consistent, 2: manually repaired), and the execution result `checkResult` (0: no record, 1: passed, 2: failed). When troubleshooting differences, compare `srcResult` and `dstResult` against `actualThreshold` to determine whether it exceeds `expectThreshold`.
   * 
   * @param request - ListDataCheckColumnResultsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataCheckColumnResultsResponse
   */
  async listDataCheckColumnResultsWithOptions(request: $_model.ListDataCheckColumnResultsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataCheckColumnResultsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resultId)) {
      query["resultId"] = request.resultId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataCheckColumnResults",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/dataCheck/report/v3/column/page`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataCheckColumnResultsResponse>(await this.callApi(params, req, runtime), new $_model.ListDataCheckColumnResultsResponse({}));
  }

  /**
   * Queries field (column) dimension validation details by validation result ID with paging, and returns the comparison results and threshold evaluation for each field between the source and destination.
   * 
   * @remarks
   * ## Operation description
   * Queries field (column) dimension validation details by validation result ID with paging. The response returns the comparison results between the source and destination for each field, the comparison rule used, the expected threshold, and the actual difference. Use this operation to drill down validation conclusions to the field level and identify which column was determined to be inconsistent and by which rule.
   * ## Request description
   * - `resultId` is required. It specifies the validation result ID, which is obtained from the validation report query operation or the step overview operation.
   * - `pageIndex` and `pageSize` are optional. They specify the page number (starting from 1) and the number of entries per page, respectively. The default value of `pageSize` is 10.
   * ## Response description
   * The response is paginated: `totalCount` indicates the total number of fields that meet the conditions, `pageIndex` and `pageSize` echo the pagination parameters of the current request, and `data` contains the field details for the current page. Each element in the list contains the step ID `stepId`, the field name and field type for the source and destination (`srcColumnName`, `srcColumnType`, `dstColumnName`, `dstColumnType`), the metric key and alias for the source and destination (`srcMetricColumn`, `dstMetricColumn`, `srcAlias`, `dstAlias`), the comparison rule `checkRule`, the expected threshold `expectThreshold`, the result values for the source and destination (`srcResult`, `dstResult`), the actual difference `actualThreshold`, the validation result `isConsistent` (0: inconsistent, 1: consistent, 2: manually repaired), and the execution result `checkResult` (0: no record, 1: passed, 2: failed). When troubleshooting differences, compare `srcResult` and `dstResult` against `actualThreshold` to determine whether it exceeds `expectThreshold`.
   * 
   * @param request - ListDataCheckColumnResultsRequest
   * @returns ListDataCheckColumnResultsResponse
   */
  async listDataCheckColumnResults(request: $_model.ListDataCheckColumnResultsRequest): Promise<$_model.ListDataCheckColumnResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataCheckColumnResultsWithOptions(request, headers, runtime);
  }

  /**
   * 分页查询校验任务配置
   * 
   * @remarks
   * ## 接口说明
   * 按数据校验任务 ID 分页查询该任务下的表明细配置，支持按源表名称模糊筛选，用于在任务包含较多表时定位单张表的配置，核对源端与目标端的表、字段、分区、过滤条件与比对规则是否符合预期。
   * ## 请求说明
   * - `taskId` 必填，为数据校验任务 ID。
   * - `srcTable` 选填，按源表名称模糊搜索。
   * - `pageIndex` 与 `pageSize` 选填，默认值为 1 与 10。
   * ## 返回说明
   * 返回分页响应：`totalCount` 为满足条件的配置总数，`pageIndex` 与 `pageSize` 回显本次分页参数，`data` 为当前页配置列表。列表元素包含配置 ID、是否跳过 `isSkipped`、所属任务 `taskId` 与校验类型 `checkType`；源端的 `sourceDataSource`、`sourceId`、`sourceType`、`sourceTable`、`sourceColumns`、`sourcePartition`、`sourceWhereClause`、`sourceGroupClause`、`sourceHint`、`sourceSql` 与 `sourceCompareKey`，以及目标端一一对应的 `targetDataSource`、`targetId`、`targetType`、`targetTable`、`targetColumns`、`targetPartition`、`targetWhereClause`、`targetGroupClause`、`targetHint`、`targetSql` 与 `targetCompareKey`；比对规则相关的总数据量阈值 `totalCountThreshold`、分组数据量阈值 `groupCountThreshold`、批大小 `batchSize`、校验算法 `algorithm`、比较类型 `comparator`、指标类型 `metricType`、是否整表比对 `isFullTableCount`、源端与目标端是否校验所有列（`sourceCheckAllColumn`、`targetCheckAllColumn`）；另有配置详情 `taskConfigInfo` 与备用字段 `extra`。
   * 
   * @param request - ListDataCheckConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataCheckConfigResponse
   */
  async listDataCheckConfigWithOptions(request: $_model.ListDataCheckConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataCheckConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.srcTable)) {
      query["srcTable"] = request.srcTable;
    }

    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataCheckConfig",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/dataCheck/config/v3/listConfig/page`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataCheckConfigResponse>(await this.callApi(params, req, runtime), new $_model.ListDataCheckConfigResponse({}));
  }

  /**
   * 分页查询校验任务配置
   * 
   * @remarks
   * ## 接口说明
   * 按数据校验任务 ID 分页查询该任务下的表明细配置，支持按源表名称模糊筛选，用于在任务包含较多表时定位单张表的配置，核对源端与目标端的表、字段、分区、过滤条件与比对规则是否符合预期。
   * ## 请求说明
   * - `taskId` 必填，为数据校验任务 ID。
   * - `srcTable` 选填，按源表名称模糊搜索。
   * - `pageIndex` 与 `pageSize` 选填，默认值为 1 与 10。
   * ## 返回说明
   * 返回分页响应：`totalCount` 为满足条件的配置总数，`pageIndex` 与 `pageSize` 回显本次分页参数，`data` 为当前页配置列表。列表元素包含配置 ID、是否跳过 `isSkipped`、所属任务 `taskId` 与校验类型 `checkType`；源端的 `sourceDataSource`、`sourceId`、`sourceType`、`sourceTable`、`sourceColumns`、`sourcePartition`、`sourceWhereClause`、`sourceGroupClause`、`sourceHint`、`sourceSql` 与 `sourceCompareKey`，以及目标端一一对应的 `targetDataSource`、`targetId`、`targetType`、`targetTable`、`targetColumns`、`targetPartition`、`targetWhereClause`、`targetGroupClause`、`targetHint`、`targetSql` 与 `targetCompareKey`；比对规则相关的总数据量阈值 `totalCountThreshold`、分组数据量阈值 `groupCountThreshold`、批大小 `batchSize`、校验算法 `algorithm`、比较类型 `comparator`、指标类型 `metricType`、是否整表比对 `isFullTableCount`、源端与目标端是否校验所有列（`sourceCheckAllColumn`、`targetCheckAllColumn`）；另有配置详情 `taskConfigInfo` 与备用字段 `extra`。
   * 
   * @param request - ListDataCheckConfigRequest
   * @returns ListDataCheckConfigResponse
   */
  async listDataCheckConfig(request: $_model.ListDataCheckConfigRequest): Promise<$_model.ListDataCheckConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataCheckConfigWithOptions(request, headers, runtime);
  }

  /**
   * 查询校验报告，表维度明细
   * 
   * @remarks
   * ## 接口说明
   * 按校验作业（批次）分页查询校验报告明细，返回每个校验子作业及其对应表的校验结果，包含行数比对、字段与指标通过情况、差异率、源端与目标端配置和错误信息，是查看一次校验执行结论的主要入口。
   * ## 请求说明
   * - 请求体为 JSON 对象，其中 `batchId` 必填，为校验作业（批次）ID，取自保存校验任务接口的返回值。
   * - `checkResult` 选填，按校验结果筛选（0 无记录、1 通过、2 不通过）；`jobStatus` 选填，按作业状态筛选（0 INIT 待运行、1 RUNNING 运行中、2 FINISHED 运行完成、3 STOPPED 终止、4 FAIL 失败、6 READY 就绪、7 SKIPPED 跳过）；`tableName` 选填，按表名筛选。
   * - `pageIndex` 与 `pageSize` 选填，分别表示页码（最小值与默认值为 1）与每页条数。
   * ## 返回说明
   * 返回分页响应：`totalCount` 为满足条件的明细总数，`pageIndex` 与 `pageSize` 回显本次分页参数，`data` 为当前页明细列表。列表元素包含批次与作业标识（`batchId`、`jobId`、`resultId`）、是否跳过 `isSkipped`、校验结果 `checkResult` 与作业状态 `jobStatus`；源端与目标端行数（`sourceCount`、`targetCount`）、实际差异与相同行数（`realDiffCount`、`realSameCount`）、预期差异行数 `expDiffCount`、差异率 `diffRate`、作业完成率 `completionRate`、仅源端或仅目标端存在的条数（`onlySrcCount`、`onlyDstCount`）；字段与指标维度的校验数与通过数（`checkColumCount`、`passColumCount`、`metricColumCount`、`metricPassColumCount`）；源端与目标端的数据源、类型、表、字段、分区、where 与 group 条件、hint、SQL 列表、比较字段与错误信息；以及阈值 `threshold`、分组数据量阈值 `totalCountThreshold`、模板名称 `templateName`、任务配置 ID `taskConfigId`、执行时间 `execTime`、完成时间 `finishTime` 与错误信息 `errorMsg`。其中的 `jobId` 与 `resultId` 可分别用于查询步骤维度明细与字段维度明细。
   * 
   * @param request - ListDataCheckReportRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataCheckReportResponse
   */
  async listDataCheckReportWithOptions(request: $_model.ListDataCheckReportRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataCheckReportResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.batchId)) {
      body["batchId"] = request.batchId;
    }

    if (!$dara.isNull(request.checkResult)) {
      body["checkResult"] = request.checkResult;
    }

    if (!$dara.isNull(request.jobStatus)) {
      body["jobStatus"] = request.jobStatus;
    }

    if (!$dara.isNull(request.pageIndex)) {
      body["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tableName)) {
      body["tableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataCheckReport",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/dataCheck/report/v3/page`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataCheckReportResponse>(await this.callApi(params, req, runtime), new $_model.ListDataCheckReportResponse({}));
  }

  /**
   * 查询校验报告，表维度明细
   * 
   * @remarks
   * ## 接口说明
   * 按校验作业（批次）分页查询校验报告明细，返回每个校验子作业及其对应表的校验结果，包含行数比对、字段与指标通过情况、差异率、源端与目标端配置和错误信息，是查看一次校验执行结论的主要入口。
   * ## 请求说明
   * - 请求体为 JSON 对象，其中 `batchId` 必填，为校验作业（批次）ID，取自保存校验任务接口的返回值。
   * - `checkResult` 选填，按校验结果筛选（0 无记录、1 通过、2 不通过）；`jobStatus` 选填，按作业状态筛选（0 INIT 待运行、1 RUNNING 运行中、2 FINISHED 运行完成、3 STOPPED 终止、4 FAIL 失败、6 READY 就绪、7 SKIPPED 跳过）；`tableName` 选填，按表名筛选。
   * - `pageIndex` 与 `pageSize` 选填，分别表示页码（最小值与默认值为 1）与每页条数。
   * ## 返回说明
   * 返回分页响应：`totalCount` 为满足条件的明细总数，`pageIndex` 与 `pageSize` 回显本次分页参数，`data` 为当前页明细列表。列表元素包含批次与作业标识（`batchId`、`jobId`、`resultId`）、是否跳过 `isSkipped`、校验结果 `checkResult` 与作业状态 `jobStatus`；源端与目标端行数（`sourceCount`、`targetCount`）、实际差异与相同行数（`realDiffCount`、`realSameCount`）、预期差异行数 `expDiffCount`、差异率 `diffRate`、作业完成率 `completionRate`、仅源端或仅目标端存在的条数（`onlySrcCount`、`onlyDstCount`）；字段与指标维度的校验数与通过数（`checkColumCount`、`passColumCount`、`metricColumCount`、`metricPassColumCount`）；源端与目标端的数据源、类型、表、字段、分区、where 与 group 条件、hint、SQL 列表、比较字段与错误信息；以及阈值 `threshold`、分组数据量阈值 `totalCountThreshold`、模板名称 `templateName`、任务配置 ID `taskConfigId`、执行时间 `execTime`、完成时间 `finishTime` 与错误信息 `errorMsg`。其中的 `jobId` 与 `resultId` 可分别用于查询步骤维度明细与字段维度明细。
   * 
   * @param request - ListDataCheckReportRequest
   * @returns ListDataCheckReportResponse
   */
  async listDataCheckReport(request: $_model.ListDataCheckReportRequest): Promise<$_model.ListDataCheckReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataCheckReportWithOptions(request, headers, runtime);
  }

  /**
   * Queries the list of historical check instances by check task ID to trace the check results of each scheduling run.
   * 
   * @remarks
   * ## Operation description
   * Queries the list of historical check instances by data validation node. The response includes the batch ID, report generation time, and report label for each check execution (including each run triggered by timed scheduling). Use this operation to trace historical check records and further query the corresponding report content by batch ID.
   * ## Request description
   * - `taskId` is required and specifies the data validation node ID.
   * - A single invoke returns all historical instances under the specified node without paging. When there are many instances, use the most recent batches as needed.
   * ## Response description
   * The response is a list. Each element in `data` represents a historical check instance: `batchId` is the batch ID (character string) that can be used as an input parameter for operations such as check report, report overview, report status, and node historical instance queries. `reportTime` is the report generation time. `label` is the report label. An empty list is returned when the node has no historical execute records. When `success` is `false`, troubleshoot by using `errCode` and `errMessage`. `requestId` is used to locate the current invoke.
   * 
   * @param request - ListDataCheckReportInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataCheckReportInstanceResponse
   */
  async listDataCheckReportInstanceWithOptions(request: $_model.ListDataCheckReportInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataCheckReportInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataCheckReportInstance",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/dataCheck/report/v3/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataCheckReportInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ListDataCheckReportInstanceResponse({}));
  }

  /**
   * Queries the list of historical check instances by check task ID to trace the check results of each scheduling run.
   * 
   * @remarks
   * ## Operation description
   * Queries the list of historical check instances by data validation node. The response includes the batch ID, report generation time, and report label for each check execution (including each run triggered by timed scheduling). Use this operation to trace historical check records and further query the corresponding report content by batch ID.
   * ## Request description
   * - `taskId` is required and specifies the data validation node ID.
   * - A single invoke returns all historical instances under the specified node without paging. When there are many instances, use the most recent batches as needed.
   * ## Response description
   * The response is a list. Each element in `data` represents a historical check instance: `batchId` is the batch ID (character string) that can be used as an input parameter for operations such as check report, report overview, report status, and node historical instance queries. `reportTime` is the report generation time. `label` is the report label. An empty list is returned when the node has no historical execute records. When `success` is `false`, troubleshoot by using `errCode` and `errMessage`. `requestId` is used to locate the current invoke.
   * 
   * @param request - ListDataCheckReportInstanceRequest
   * @returns ListDataCheckReportInstanceResponse
   */
  async listDataCheckReportInstance(request: $_model.ListDataCheckReportInstanceRequest): Promise<$_model.ListDataCheckReportInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataCheckReportInstanceWithOptions(request, headers, runtime);
  }

  /**
   * Queries step-level (partition-level) verification details by job ID with a paged query. Supports filtering by verification result and node status.
   * 
   * @remarks
   * ## Operation description
   * Queries step-level (partition or shard) dimension verification details for a verification sub-job with a paged query. Supports filtering by verification result and step status. Use this operation to drill down verification conclusions to the partition level and view the source and destination data volumes, actual SQL statements executed, consistency conclusions, and error messages for each step.
   * ## Request description
   * - `jobId` is required and specifies the database ID (integer) of the verification sub-job. If you have a UUID-format sub-job ID, use the operation that queries step details by UUID instead. The two operations have different parameter formats and are not interchangeable.
   * - `checkResult` is optional and filters by verification result (0: no record, 1: passed, 2: failed). `jobStatus` is optional and filters by step status (0: INIT, 1: RUNNING, 2: FINISHED, 3: STOPPED, 4: FAIL, 6: READY, 7: SKIPPED).
   * - `pageIndex` and `pageSize` are optional. Default values are 1 and 10.
   * ## Response description
   * Returns a paginated response: `totalCount` indicates the total number of steps that meet the filter conditions, `pageIndex` and `pageSize` echo the pagination parameters of the current request, and `data` contains the step details for the current page. Each list element includes the record ID `id`, step ID `stepId`, verification result ID `resultId`, parent job `jobId`, shard boundary `boundary`, source and destination partition names (`sourcePtName`, `targetPtName`), source and destination data volumes (`srcCount`, `dstCount`), source and destination SQL statements (`srcSql`, `dstSql`), step status `status` (0: created, 1: running, 2: completed, 3: stopped, 4: canceled), consistency conclusion `isConsistent` (0: inconsistent, 1: consistent), error message `errMessage`, start and end times (`gmtStart`, `gmtEnd`), creation and modification times (`gmtCreate`, `gmtModified`), verified and passed counts at the field and metric levels (`checkColumCount`, `passColumCount`, `metricColumCount`, `metricPassColumCount`), label name list `signNameList`, and reserved field `extra`. The `resultId` can be used to further query field-level details and result overview for the step.
   * 
   * @param request - ListDataCheckReportStepRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataCheckReportStepResponse
   */
  async listDataCheckReportStepWithOptions(request: $_model.ListDataCheckReportStepRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataCheckReportStepResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.checkResult)) {
      query["checkResult"] = request.checkResult;
    }

    if (!$dara.isNull(request.jobId)) {
      query["jobId"] = request.jobId;
    }

    if (!$dara.isNull(request.jobStatus)) {
      query["jobStatus"] = request.jobStatus;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataCheckReportStep",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/dataCheck/report/v3/step/page`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataCheckReportStepResponse>(await this.callApi(params, req, runtime), new $_model.ListDataCheckReportStepResponse({}));
  }

  /**
   * Queries step-level (partition-level) verification details by job ID with a paged query. Supports filtering by verification result and node status.
   * 
   * @remarks
   * ## Operation description
   * Queries step-level (partition or shard) dimension verification details for a verification sub-job with a paged query. Supports filtering by verification result and step status. Use this operation to drill down verification conclusions to the partition level and view the source and destination data volumes, actual SQL statements executed, consistency conclusions, and error messages for each step.
   * ## Request description
   * - `jobId` is required and specifies the database ID (integer) of the verification sub-job. If you have a UUID-format sub-job ID, use the operation that queries step details by UUID instead. The two operations have different parameter formats and are not interchangeable.
   * - `checkResult` is optional and filters by verification result (0: no record, 1: passed, 2: failed). `jobStatus` is optional and filters by step status (0: INIT, 1: RUNNING, 2: FINISHED, 3: STOPPED, 4: FAIL, 6: READY, 7: SKIPPED).
   * - `pageIndex` and `pageSize` are optional. Default values are 1 and 10.
   * ## Response description
   * Returns a paginated response: `totalCount` indicates the total number of steps that meet the filter conditions, `pageIndex` and `pageSize` echo the pagination parameters of the current request, and `data` contains the step details for the current page. Each list element includes the record ID `id`, step ID `stepId`, verification result ID `resultId`, parent job `jobId`, shard boundary `boundary`, source and destination partition names (`sourcePtName`, `targetPtName`), source and destination data volumes (`srcCount`, `dstCount`), source and destination SQL statements (`srcSql`, `dstSql`), step status `status` (0: created, 1: running, 2: completed, 3: stopped, 4: canceled), consistency conclusion `isConsistent` (0: inconsistent, 1: consistent), error message `errMessage`, start and end times (`gmtStart`, `gmtEnd`), creation and modification times (`gmtCreate`, `gmtModified`), verified and passed counts at the field and metric levels (`checkColumCount`, `passColumCount`, `metricColumCount`, `metricPassColumCount`), label name list `signNameList`, and reserved field `extra`. The `resultId` can be used to further query field-level details and result overview for the step.
   * 
   * @param request - ListDataCheckReportStepRequest
   * @returns ListDataCheckReportStepResponse
   */
  async listDataCheckReportStep(request: $_model.ListDataCheckReportStepRequest): Promise<$_model.ListDataCheckReportStepResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataCheckReportStepWithOptions(request, headers, runtime);
  }

  /**
   * 查询报告-作业维度明细（分区列表）
   * 
   * @remarks
   * ## 接口说明
   * 按 UUID 形式的校验子作业 ID 分页查询 step（分区或分片）维度的校验明细。返回的明细与按数据库 ID 查询的接口一致，区别在于入参形态：本接口直接使用校验报告中给出的子作业 ID 字符串，无需先换算为数据库 ID，适合从报告结果直接下钻。
   * ## 请求说明
   * - `jobId` 必填，为 UUID 形式的校验子作业 ID（字符串），取自校验报告查询接口返回的 `jobId`。
   * - `pageIndex` 与 `pageSize` 选填，默认值为 1 与 10。
   * - 本接口不支持按校验结果或 step 状态筛选；需要筛选时改用按数据库 ID 查询 step 明细的接口。
   * ## 返回说明
   * 返回分页响应：`totalCount` 为满足条件的 step 总数，`pageIndex` 与 `pageSize` 回显本次分页参数，`data` 为当前页 step 明细。列表元素包含步骤 ID `stepId`、校验结果 ID `resultId`、分片边界 `boundary`、源端与目标端分区名称（`sourcePtName`、`targetPtName`）、源端与目标端数据量（`srcCount`、`dstCount`）、源端与目标端执行 SQL（`srcSql`、`dstSql`）、step 状态 `status`（0 创建、1 运行中、2 运行完成、3 停止、4 取消）、一致性结论 `isConsistent`（0 不一致、1 一致）、错误消息 `errMessage`、启动与结束时间（`gmtStart`、`gmtEnd`）、字段与指标维度的校验数与通过数（`checkColumCount`、`passColumCount`、`metricColumCount`、`metricPassColumCount`）与备用字段 `extra`。
   * 
   * @param request - ListDataCheckReportStepByJobIdRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataCheckReportStepByJobIdResponse
   */
  async listDataCheckReportStepByJobIdWithOptions(request: $_model.ListDataCheckReportStepByJobIdRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataCheckReportStepByJobIdResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jobId)) {
      query["jobId"] = request.jobId;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataCheckReportStepByJobId",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/dataCheck/report/v3/step/pageByJobId`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataCheckReportStepByJobIdResponse>(await this.callApi(params, req, runtime), new $_model.ListDataCheckReportStepByJobIdResponse({}));
  }

  /**
   * 查询报告-作业维度明细（分区列表）
   * 
   * @remarks
   * ## 接口说明
   * 按 UUID 形式的校验子作业 ID 分页查询 step（分区或分片）维度的校验明细。返回的明细与按数据库 ID 查询的接口一致，区别在于入参形态：本接口直接使用校验报告中给出的子作业 ID 字符串，无需先换算为数据库 ID，适合从报告结果直接下钻。
   * ## 请求说明
   * - `jobId` 必填，为 UUID 形式的校验子作业 ID（字符串），取自校验报告查询接口返回的 `jobId`。
   * - `pageIndex` 与 `pageSize` 选填，默认值为 1 与 10。
   * - 本接口不支持按校验结果或 step 状态筛选；需要筛选时改用按数据库 ID 查询 step 明细的接口。
   * ## 返回说明
   * 返回分页响应：`totalCount` 为满足条件的 step 总数，`pageIndex` 与 `pageSize` 回显本次分页参数，`data` 为当前页 step 明细。列表元素包含步骤 ID `stepId`、校验结果 ID `resultId`、分片边界 `boundary`、源端与目标端分区名称（`sourcePtName`、`targetPtName`）、源端与目标端数据量（`srcCount`、`dstCount`）、源端与目标端执行 SQL（`srcSql`、`dstSql`）、step 状态 `status`（0 创建、1 运行中、2 运行完成、3 停止、4 取消）、一致性结论 `isConsistent`（0 不一致、1 一致）、错误消息 `errMessage`、启动与结束时间（`gmtStart`、`gmtEnd`）、字段与指标维度的校验数与通过数（`checkColumCount`、`passColumCount`、`metricColumCount`、`metricPassColumCount`）与备用字段 `extra`。
   * 
   * @param request - ListDataCheckReportStepByJobIdRequest
   * @returns ListDataCheckReportStepByJobIdResponse
   */
  async listDataCheckReportStepByJobId(request: $_model.ListDataCheckReportStepByJobIdRequest): Promise<$_model.ListDataCheckReportStepByJobIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataCheckReportStepByJobIdWithOptions(request, headers, runtime);
  }

  /**
   * Queries historical instances of data validation nodes by batch ID and node ID with paging. Supports filtering by execute status, validation result, and time ranges for creation, execute start, and execute end.
   * 
   * @remarks
   * ## Operation description
   * Queries historical execute instances (batches) of data validation nodes with paging. Supports combined filtering by batch ID, node ID, execute status, validation result, and three types of time ranges: creation time, execute start time, and execute end time. Returns table count statistics, pass rate, start and end times, and execute duration for each execution. Use this operation to review historical validation execute details and result trends.
   * ## Request description
   * - `batchId` is required and specifies the validation job (batch) ID.
   * - `taskId` is optional and specifies the data validation task ID. `execStatus` is optional and filters by execution status (0: pending, 1: running, 2: stopped, 3: failed, 4: completed). `checkResult` is optional and filters by validation result (0: no records, 1: passed, 2: failed).
   * - `createStartTime` and `createEndTime`, `execStartTime` and `execEndTime`, `finishStartTime` and `finishEndTime` define the filter ranges for job creation time, execution start time, and execution end time, respectively. The format is YYYY-MM-DD HH:MM:SS. Specify both the start and end values in pairs.
   * - `pageIndex` and `pageSize` are optional and specify the page number and the number of entries per page, respectively.
   * ## Response description
   * Returns a paginated response. `totalCount` indicates the total number of historical instances that meet the filter conditions. `pageIndex` and `pageSize` reflect the pagination parameters of the current request. `data` contains the list of instances on the current page. Each list element includes batch identifiers (`batchId`, `originBatchId`, `seqId`), report title and report time (`reportTitle`, `reportTime`), the number of validated tables and the number of tables with errors, successes, and skips (`checkTableNum`, `errorTableNum`, `successfulTableNum`, `skipTableNum`), execution status `execStatus` and validation result `checkResult`, start and end times (`startTime`, `endTime`) and execution duration `execTime`, task progress `progress`, pass rate `passProcess` and its percentage string form `passProcessExport`, scheduling cycle expression `cronExp`, batch concurrency `concurrency`, scheduled task ID `scheduleId`, creator and updater (`creator`, `operator`), creation and last modification times (`gmtCreate`, `gmtModified`), error message `errorMsg`, reserved field `extra`, and business field `biz`.
   * 
   * @param request - ListDataCheckTaskHistoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataCheckTaskHistoryResponse
   */
  async listDataCheckTaskHistoryWithOptions(request: $_model.ListDataCheckTaskHistoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataCheckTaskHistoryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.batchId)) {
      query["batchId"] = request.batchId;
    }

    if (!$dara.isNull(request.checkResult)) {
      query["checkResult"] = request.checkResult;
    }

    if (!$dara.isNull(request.createEndTime)) {
      query["createEndTime"] = request.createEndTime;
    }

    if (!$dara.isNull(request.createStartTime)) {
      query["createStartTime"] = request.createStartTime;
    }

    if (!$dara.isNull(request.execEndTime)) {
      query["execEndTime"] = request.execEndTime;
    }

    if (!$dara.isNull(request.execStartTime)) {
      query["execStartTime"] = request.execStartTime;
    }

    if (!$dara.isNull(request.execStatus)) {
      query["execStatus"] = request.execStatus;
    }

    if (!$dara.isNull(request.finishEndTime)) {
      query["finishEndTime"] = request.finishEndTime;
    }

    if (!$dara.isNull(request.finishStartTime)) {
      query["finishStartTime"] = request.finishStartTime;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataCheckTaskHistory",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/dataCheck/task/v3/details`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataCheckTaskHistoryResponse>(await this.callApi(params, req, runtime), new $_model.ListDataCheckTaskHistoryResponse({}));
  }

  /**
   * Queries historical instances of data validation nodes by batch ID and node ID with paging. Supports filtering by execute status, validation result, and time ranges for creation, execute start, and execute end.
   * 
   * @remarks
   * ## Operation description
   * Queries historical execute instances (batches) of data validation nodes with paging. Supports combined filtering by batch ID, node ID, execute status, validation result, and three types of time ranges: creation time, execute start time, and execute end time. Returns table count statistics, pass rate, start and end times, and execute duration for each execution. Use this operation to review historical validation execute details and result trends.
   * ## Request description
   * - `batchId` is required and specifies the validation job (batch) ID.
   * - `taskId` is optional and specifies the data validation task ID. `execStatus` is optional and filters by execution status (0: pending, 1: running, 2: stopped, 3: failed, 4: completed). `checkResult` is optional and filters by validation result (0: no records, 1: passed, 2: failed).
   * - `createStartTime` and `createEndTime`, `execStartTime` and `execEndTime`, `finishStartTime` and `finishEndTime` define the filter ranges for job creation time, execution start time, and execution end time, respectively. The format is YYYY-MM-DD HH:MM:SS. Specify both the start and end values in pairs.
   * - `pageIndex` and `pageSize` are optional and specify the page number and the number of entries per page, respectively.
   * ## Response description
   * Returns a paginated response. `totalCount` indicates the total number of historical instances that meet the filter conditions. `pageIndex` and `pageSize` reflect the pagination parameters of the current request. `data` contains the list of instances on the current page. Each list element includes batch identifiers (`batchId`, `originBatchId`, `seqId`), report title and report time (`reportTitle`, `reportTime`), the number of validated tables and the number of tables with errors, successes, and skips (`checkTableNum`, `errorTableNum`, `successfulTableNum`, `skipTableNum`), execution status `execStatus` and validation result `checkResult`, start and end times (`startTime`, `endTime`) and execution duration `execTime`, task progress `progress`, pass rate `passProcess` and its percentage string form `passProcessExport`, scheduling cycle expression `cronExp`, batch concurrency `concurrency`, scheduled task ID `scheduleId`, creator and updater (`creator`, `operator`), creation and last modification times (`gmtCreate`, `gmtModified`), error message `errorMsg`, reserved field `extra`, and business field `biz`.
   * 
   * @param request - ListDataCheckTaskHistoryRequest
   * @returns ListDataCheckTaskHistoryResponse
   */
  async listDataCheckTaskHistory(request: $_model.ListDataCheckTaskHistoryRequest): Promise<$_model.ListDataCheckTaskHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataCheckTaskHistoryWithOptions(request, headers, runtime);
  }

  /**
   * Queries the metadata data source list by paging and returns the data source type, connection status, and status information of associated profiling nodes.
   * 
   * @remarks
   * ## Operation description
   * Queries the metadata data source list by paging and returns the basic information, connectivity status, and associated profiling node status of each data source. This operation is used for data source management, selection, and troubleshooting.
   * ## Request description
   * The request body is a JSON object. You can filter results by data source type, name, connectivity status, and categorization. The dsName parameter supports exact match or fuzzy match. The pageIndex parameter starts from 1, and pageSize specifies the number of records per page. The orderBy and orderDirection parameters control the sorting field and sorting direction. The needTotalCount parameter specifies whether to return the total number of records in the paging result.
   * ## Response description
   * The totalCount parameter indicates the total number of records that meet the conditional filter criteria. The pageIndex and pageSize parameters echo the paging parameters. The data parameter contains the list of data sources on the current page. Each element in the list contains the datasource config (sensitive fields such as tokens are masked in the response) and profiling node information. If a data source is not associated with a profiling node, the profilingJob field is empty.
   * 
   * @param request - ListMetaDataComponentPageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMetaDataComponentPageResponse
   */
  async listMetaDataComponentPageWithOptions(request: $_model.ListMetaDataComponentPageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMetaDataComponentPageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryType)) {
      body["categoryType"] = request.categoryType;
    }

    if (!$dara.isNull(request.componentType)) {
      body["componentType"] = request.componentType;
    }

    if (!$dara.isNull(request.dsName)) {
      body["dsName"] = request.dsName;
    }

    if (!$dara.isNull(request.dsStatus)) {
      body["dsStatus"] = request.dsStatus;
    }

    if (!$dara.isNull(request.dsType)) {
      body["dsType"] = request.dsType;
    }

    if (!$dara.isNull(request.dsTypeList)) {
      body["dsTypeList"] = request.dsTypeList;
    }

    if (!$dara.isNull(request.groupBy)) {
      body["groupBy"] = request.groupBy;
    }

    if (!$dara.isNull(request.needTotalCount)) {
      body["needTotalCount"] = request.needTotalCount;
    }

    if (!$dara.isNull(request.orderBy)) {
      body["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      body["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageIndex)) {
      body["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.srcComponentId)) {
      body["srcComponentId"] = request.srcComponentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMetaDataComponentPage",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/api/v2/meta/data-component/page`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMetaDataComponentPageResponse>(await this.callApi(params, req, runtime), new $_model.ListMetaDataComponentPageResponse({}));
  }

  /**
   * Queries the metadata data source list by paging and returns the data source type, connection status, and status information of associated profiling nodes.
   * 
   * @remarks
   * ## Operation description
   * Queries the metadata data source list by paging and returns the basic information, connectivity status, and associated profiling node status of each data source. This operation is used for data source management, selection, and troubleshooting.
   * ## Request description
   * The request body is a JSON object. You can filter results by data source type, name, connectivity status, and categorization. The dsName parameter supports exact match or fuzzy match. The pageIndex parameter starts from 1, and pageSize specifies the number of records per page. The orderBy and orderDirection parameters control the sorting field and sorting direction. The needTotalCount parameter specifies whether to return the total number of records in the paging result.
   * ## Response description
   * The totalCount parameter indicates the total number of records that meet the conditional filter criteria. The pageIndex and pageSize parameters echo the paging parameters. The data parameter contains the list of data sources on the current page. Each element in the list contains the datasource config (sensitive fields such as tokens are masked in the response) and profiling node information. If a data source is not associated with a profiling node, the profilingJob field is empty.
   * 
   * @param request - ListMetaDataComponentPageRequest
   * @returns ListMetaDataComponentPageResponse
   */
  async listMetaDataComponentPage(request: $_model.ListMetaDataComponentPageRequest): Promise<$_model.ListMetaDataComponentPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMetaDataComponentPageWithOptions(request, headers, runtime);
  }

  /**
   * User Scheduling Task Transformation
   * 
   * @remarks
   * ## Interface Description
   * This is an internal interface for submitting a workflow transformation task. It submits a workflow transformation based on the source, target data sources, and SQL node type mapping. The interface synchronously returns the acceptance result, and the asynchronous execution result can be queried through GetInnerConvertAsyncResult.
   * ## Request Description
   * The request body is a JSON object. `srcDataSourceName` and `tgtDataSourceName` are the names of the scheduling data sources at the source and target ends of the transformation task, respectively; `sqlConvertMap` is the mapping from source node types to target node types, which is written into the transformation configuration if not empty.
   * ## Response Description
   * When successful, `data` returns the identifier of the transformation task (a string) for subsequent asynchronous result queries; in specific error cases such as multiple data sources with the same name, `data` carries the detailed error text; in case of failure, use `errCode` and `errMessage` for troubleshooting.
   * 
   * @param request - PostInnerConvertRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PostInnerConvertResponse
   */
  async postInnerConvertWithOptions(request: $_model.PostInnerConvertRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PostInnerConvertResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sqlConvertMap)) {
      body["sqlConvertMap"] = request.sqlConvertMap;
    }

    if (!$dara.isNull(request.srcDataSourceName)) {
      body["srcDataSourceName"] = request.srcDataSourceName;
    }

    if (!$dara.isNull(request.tgtDataSourceName)) {
      body["tgtDataSourceName"] = request.tgtDataSourceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PostInnerConvert",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/api/skill/inner/v1/convert`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PostInnerConvertResponse>(await this.callApi(params, req, runtime), new $_model.PostInnerConvertResponse({}));
  }

  /**
   * User Scheduling Task Transformation
   * 
   * @remarks
   * ## Interface Description
   * This is an internal interface for submitting a workflow transformation task. It submits a workflow transformation based on the source, target data sources, and SQL node type mapping. The interface synchronously returns the acceptance result, and the asynchronous execution result can be queried through GetInnerConvertAsyncResult.
   * ## Request Description
   * The request body is a JSON object. `srcDataSourceName` and `tgtDataSourceName` are the names of the scheduling data sources at the source and target ends of the transformation task, respectively; `sqlConvertMap` is the mapping from source node types to target node types, which is written into the transformation configuration if not empty.
   * ## Response Description
   * When successful, `data` returns the identifier of the transformation task (a string) for subsequent asynchronous result queries; in specific error cases such as multiple data sources with the same name, `data` carries the detailed error text; in case of failure, use `errCode` and `errMessage` for troubleshooting.
   * 
   * @param request - PostInnerConvertRequest
   * @returns PostInnerConvertResponse
   */
  async postInnerConvert(request: $_model.PostInnerConvertRequest): Promise<$_model.PostInnerConvertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.postInnerConvertWithOptions(request, headers, runtime);
  }

  /**
   * 调度skillread
   * 
   * @remarks
   * ## 接口说明
   * 源端工作流读取任务提交内部接口。按数据源名称提交一次源端工作流读取，接口同步返回受理结果，读取的异步执行结果通过 GetInnerReadAsyncResult 查询。
   * ## 请求说明
   * 请求体为 JSON 对象，dataSourceName 指定读取任务的数据源名称；数据源缺失时可改由 dataSourceDescriptor 在入参中一次传齐数据源描述信息作为兜底。
   * ## 返回说明
   * 成功时 data 返回读取任务标识（字符串），用于后续异步结果查询；命中多个同名数据源等特定错误时 data 承载错误明细文本；失败时结合 errCode 与 errMessage 排查。
   * 
   * @param request - PostInnerReaderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PostInnerReaderResponse
   */
  async postInnerReaderWithOptions(request: $_model.PostInnerReaderRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PostInnerReaderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataSourceDescriptor)) {
      body["dataSourceDescriptor"] = request.dataSourceDescriptor;
    }

    if (!$dara.isNull(request.dataSourceName)) {
      body["dataSourceName"] = request.dataSourceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PostInnerReader",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/api/skill/inner/v1/read`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PostInnerReaderResponse>(await this.callApi(params, req, runtime), new $_model.PostInnerReaderResponse({}));
  }

  /**
   * 调度skillread
   * 
   * @remarks
   * ## 接口说明
   * 源端工作流读取任务提交内部接口。按数据源名称提交一次源端工作流读取，接口同步返回受理结果，读取的异步执行结果通过 GetInnerReadAsyncResult 查询。
   * ## 请求说明
   * 请求体为 JSON 对象，dataSourceName 指定读取任务的数据源名称；数据源缺失时可改由 dataSourceDescriptor 在入参中一次传齐数据源描述信息作为兜底。
   * ## 返回说明
   * 成功时 data 返回读取任务标识（字符串），用于后续异步结果查询；命中多个同名数据源等特定错误时 data 承载错误明细文本；失败时结合 errCode 与 errMessage 排查。
   * 
   * @param request - PostInnerReaderRequest
   * @returns PostInnerReaderResponse
   */
  async postInnerReader(request: $_model.PostInnerReaderRequest): Promise<$_model.PostInnerReaderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.postInnerReaderWithOptions(request, headers, runtime);
  }

  /**
   * Uploads a local conversion result package for subsequent batch writing to the destination scheduling system. This is a Skill internal operation.
   * 
   * @remarks
   * ## Operation description
   * Uploads a local conversion result package and overwrites the existing result package on the task for subsequent batch writing to the destination scheduling system. This operation is applicable to scenarios where you need to modify conversion results locally before uploading them back. First, export the conversion result package, modify the file content offline, and then use this operation to overwrite and upload the package.
   * ## Request description
   * - The request body is a JSON object. taskId specifies the scheduling migration task ID and determines which task the result package belongs to. fileName specifies the file name. fileContentBase64 specifies the file content, which must be Base64-encoded before being sent. The server decodes the content before saving it.
   * - The upload uses overwrite semantics. Uploading again for the same task replaces the existing result package. Confirm that the local file is the expected final version before uploading.
   * ## Response description
   * The response returns a single value. data contains the upload result information as a string. A successful upload only indicates that the result package has been received by the server and overwritten on the corresponding task. It does not mean that the data has been written to the destination scheduling system. Writing requires a separate submit action. If the call fails, troubleshoot by using errCode and errMessage. Common causes include a nonexistent task ID, invalid file content, or Base64 decoding failure. requestId identifies this specific call.
   * 
   * @param request - PostInnerUploadConvertPackageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PostInnerUploadConvertPackageResponse
   */
  async postInnerUploadConvertPackageWithOptions(request: $_model.PostInnerUploadConvertPackageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PostInnerUploadConvertPackageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileContentBase64)) {
      body["fileContentBase64"] = request.fileContentBase64;
    }

    if (!$dara.isNull(request.fileName)) {
      body["fileName"] = request.fileName;
    }

    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PostInnerUploadConvertPackage",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/api/skill/inner/v1/convert/upload-package`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PostInnerUploadConvertPackageResponse>(await this.callApi(params, req, runtime), new $_model.PostInnerUploadConvertPackageResponse({}));
  }

  /**
   * Uploads a local conversion result package for subsequent batch writing to the destination scheduling system. This is a Skill internal operation.
   * 
   * @remarks
   * ## Operation description
   * Uploads a local conversion result package and overwrites the existing result package on the task for subsequent batch writing to the destination scheduling system. This operation is applicable to scenarios where you need to modify conversion results locally before uploading them back. First, export the conversion result package, modify the file content offline, and then use this operation to overwrite and upload the package.
   * ## Request description
   * - The request body is a JSON object. taskId specifies the scheduling migration task ID and determines which task the result package belongs to. fileName specifies the file name. fileContentBase64 specifies the file content, which must be Base64-encoded before being sent. The server decodes the content before saving it.
   * - The upload uses overwrite semantics. Uploading again for the same task replaces the existing result package. Confirm that the local file is the expected final version before uploading.
   * ## Response description
   * The response returns a single value. data contains the upload result information as a string. A successful upload only indicates that the result package has been received by the server and overwritten on the corresponding task. It does not mean that the data has been written to the destination scheduling system. Writing requires a separate submit action. If the call fails, troubleshoot by using errCode and errMessage. Common causes include a nonexistent task ID, invalid file content, or Base64 decoding failure. requestId identifies this specific call.
   * 
   * @param request - PostInnerUploadConvertPackageRequest
   * @returns PostInnerUploadConvertPackageResponse
   */
  async postInnerUploadConvertPackage(request: $_model.PostInnerUploadConvertPackageRequest): Promise<$_model.PostInnerUploadConvertPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.postInnerUploadConvertPackageWithOptions(request, headers, runtime);
  }

  /**
   * Performs a Dry Run validation on a single converted SQL statement to verify syntax and execution permissions without actually writing data.
   * 
   * @remarks
   * ## Operation description
   * Performs a Dry Run validation on a single SQL statement against a specified data source. This operation verifies whether the syntax can be parsed and whether the required execution permissions are granted, without actually writing data. Use this operation to validate individual SQL statements before batch execution of converted SQL, reducing the risk of failures during formal execution.
   * ## Request description
   * - The request body is a JSON object. `sql` specifies the SQL statement to validate. `datasourceName` specifies the name of the data source used for validation, which must be a registered and connectable data source.
   * - Dry Run only performs validation without producing data changes and can be called repeatedly. After validation succeeds, submit the formal SQL execution job.
   * ## Response description
   * Returns a single-value response. `data` contains the Dry Run execution result (string). If validation fails, the operation returns an error: `errCode` is DRY_RUN_ERROR, and `errMessage` provides the specific reason (such as a syntax error or insufficient execution permissions). Use this information to correct the SQL statement or datasource config and retry. `requestId` identifies the current call.
   * 
   * @param request - SingleSqlDryRunRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SingleSqlDryRunResponse
   */
  async singleSqlDryRunWithOptions(request: $_model.SingleSqlDryRunRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SingleSqlDryRunResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasourceName)) {
      body["datasourceName"] = request.datasourceName;
    }

    if (!$dara.isNull(request.sql)) {
      body["sql"] = request.sql;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SingleSqlDryRun",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/api/bigdata/sql-translator/dryRun`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SingleSqlDryRunResponse>(await this.callApi(params, req, runtime), new $_model.SingleSqlDryRunResponse({}));
  }

  /**
   * Performs a Dry Run validation on a single converted SQL statement to verify syntax and execution permissions without actually writing data.
   * 
   * @remarks
   * ## Operation description
   * Performs a Dry Run validation on a single SQL statement against a specified data source. This operation verifies whether the syntax can be parsed and whether the required execution permissions are granted, without actually writing data. Use this operation to validate individual SQL statements before batch execution of converted SQL, reducing the risk of failures during formal execution.
   * ## Request description
   * - The request body is a JSON object. `sql` specifies the SQL statement to validate. `datasourceName` specifies the name of the data source used for validation, which must be a registered and connectable data source.
   * - Dry Run only performs validation without producing data changes and can be called repeatedly. After validation succeeds, submit the formal SQL execution job.
   * ## Response description
   * Returns a single-value response. `data` contains the Dry Run execution result (string). If validation fails, the operation returns an error: `errCode` is DRY_RUN_ERROR, and `errMessage` provides the specific reason (such as a syntax error or insufficient execution permissions). Use this information to correct the SQL statement or datasource config and retry. `requestId` identifies the current call.
   * 
   * @param request - SingleSqlDryRunRequest
   * @returns SingleSqlDryRunResponse
   */
  async singleSqlDryRun(request: $_model.SingleSqlDryRunRequest): Promise<$_model.SingleSqlDryRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.singleSqlDryRunWithOptions(request, headers, runtime);
  }

  /**
   * 对某个sql转换任务校验+转换
   * 
   * @remarks
   * ## 接口说明
   * 对指定的 SQL 转换任务先执行语法校验、再执行转换，在一次调用内串起「校验 + 转换」两个动作，适用于希望在转换前自动拦截语法问题、而不必分两步分别调用的场景。
   * ## 请求说明
   * - `taskId` 必填，为 SQL 转换任务 ID。
   * - 调用会校验任务归属，只能处理归属于当前账号的任务，否则返回鉴权失败。
   * - 本接口按任务维度触发处理，不接受逐条脚本入参；脚本较多时处理耗时较长。
   * ## 返回说明
   * 返回单值响应，`data` 为对象，其中 `taskId` 回显本次处理的任务 ID。逐条脚本的校验与转换结果不在本接口返回，需调用查询转换进度接口跟踪进展、调用查询转换结果接口获取每条脚本的源语句、目标语句与转换状态。`success` 为 `false` 时说明语法校验或转换环节失败，结合 `errCode` 与 `errMessage` 定位原因；`requestId` 用于排查本次调用。
   * 
   * @param request - SyntaxCheckAndTransformSqlConversionTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyntaxCheckAndTransformSqlConversionTaskResponse
   */
  async syntaxCheckAndTransformSqlConversionTaskWithOptions(request: $_model.SyntaxCheckAndTransformSqlConversionTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SyntaxCheckAndTransformSqlConversionTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SyntaxCheckAndTransformSqlConversionTask",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/api/bigdata/jobMigrate/sqlTranslator/task/api/syntaxCheckAndTransformTask`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SyntaxCheckAndTransformSqlConversionTaskResponse>(await this.callApi(params, req, runtime), new $_model.SyntaxCheckAndTransformSqlConversionTaskResponse({}));
  }

  /**
   * 对某个sql转换任务校验+转换
   * 
   * @remarks
   * ## 接口说明
   * 对指定的 SQL 转换任务先执行语法校验、再执行转换，在一次调用内串起「校验 + 转换」两个动作，适用于希望在转换前自动拦截语法问题、而不必分两步分别调用的场景。
   * ## 请求说明
   * - `taskId` 必填，为 SQL 转换任务 ID。
   * - 调用会校验任务归属，只能处理归属于当前账号的任务，否则返回鉴权失败。
   * - 本接口按任务维度触发处理，不接受逐条脚本入参；脚本较多时处理耗时较长。
   * ## 返回说明
   * 返回单值响应，`data` 为对象，其中 `taskId` 回显本次处理的任务 ID。逐条脚本的校验与转换结果不在本接口返回，需调用查询转换进度接口跟踪进展、调用查询转换结果接口获取每条脚本的源语句、目标语句与转换状态。`success` 为 `false` 时说明语法校验或转换环节失败，结合 `errCode` 与 `errMessage` 定位原因；`requestId` 用于排查本次调用。
   * 
   * @param request - SyntaxCheckAndTransformSqlConversionTaskRequest
   * @returns SyntaxCheckAndTransformSqlConversionTaskResponse
   */
  async syntaxCheckAndTransformSqlConversionTask(request: $_model.SyntaxCheckAndTransformSqlConversionTaskRequest): Promise<$_model.SyntaxCheckAndTransformSqlConversionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.syntaxCheckAndTransformSqlConversionTaskWithOptions(request, headers, runtime);
  }

  /**
   * Modifies an existing data validation task. You can adjust the basic task information, source and destination data sources, validation engines, and the referenced validation template.
   * 
   * @remarks
   * ## Operation description
   * Modifies an existing data validation task. You can adjust the task name and description, source and destination data sources, source and destination validation engines, and the validation template referenced by the task. This operation is used to correct configurations or change the source of comparison rules after a task is created.
   * ## Request description
   * - The request body is a JSON object. The `id` field is required and specifies the ID of the data validation task to modify. All other fields are optional. Fields that are not included in the request retain their original values.
   * - `taskName` supports only Chinese characters, English letters, and digits. `taskDescription` specifies the task description.
   * - `srcDsId`, `srcDsName`, and `srcDsType` describe the source data source. `dstDsId`, `dstDsName`, and `dstDsType` describe the destination data source. `srcEngineId`, `srcEngineName`, and `srcEngineType` describe the source validation engine. `dstEngineId`, `dstEngineName`, and `dstEngineType` describe the destination validation engine. Provide the ID, name, and type of a data source or engine as a group to avoid configuration inconsistencies caused by modifying only one of them.
   * - Comparison rules are indirectly adjusted through `checkTemplateId`. After you replace the template, the task runs based on the rules of the new template. If this field is not included, the original template is retained. This operation does not accept table-level detail configurations or scheduling settings. To adjust these settings, use the validation task configuration and scheduling operations.
   * ## Response description
   * The response returns a single value. `data` is an integer business data value returned with the update result. To determine whether the update is successful, check the `success` field. If `success` is `false`, use `errCode` and `errMessage` to identify the cause of the failure. Common causes include a nonexistent task ID, insufficient permissions to modify the task, or a task name that does not meet the character restrictions. `requestId` is used to troubleshoot the call.
   * 
   * @param request - UpdateDataCheckTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataCheckTaskResponse
   */
  async updateDataCheckTaskWithOptions(request: $_model.UpdateDataCheckTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataCheckTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.checkTemplateId)) {
      body["checkTemplateId"] = request.checkTemplateId;
    }

    if (!$dara.isNull(request.dstDsId)) {
      body["dstDsId"] = request.dstDsId;
    }

    if (!$dara.isNull(request.dstDsName)) {
      body["dstDsName"] = request.dstDsName;
    }

    if (!$dara.isNull(request.dstDsType)) {
      body["dstDsType"] = request.dstDsType;
    }

    if (!$dara.isNull(request.dstEngineId)) {
      body["dstEngineId"] = request.dstEngineId;
    }

    if (!$dara.isNull(request.dstEngineName)) {
      body["dstEngineName"] = request.dstEngineName;
    }

    if (!$dara.isNull(request.dstEngineType)) {
      body["dstEngineType"] = request.dstEngineType;
    }

    if (!$dara.isNull(request.id)) {
      body["id"] = request.id;
    }

    if (!$dara.isNull(request.srcDsId)) {
      body["srcDsId"] = request.srcDsId;
    }

    if (!$dara.isNull(request.srcDsName)) {
      body["srcDsName"] = request.srcDsName;
    }

    if (!$dara.isNull(request.srcDsType)) {
      body["srcDsType"] = request.srcDsType;
    }

    if (!$dara.isNull(request.srcEngineId)) {
      body["srcEngineId"] = request.srcEngineId;
    }

    if (!$dara.isNull(request.srcEngineName)) {
      body["srcEngineName"] = request.srcEngineName;
    }

    if (!$dara.isNull(request.srcEngineType)) {
      body["srcEngineType"] = request.srcEngineType;
    }

    if (!$dara.isNull(request.taskDescription)) {
      body["taskDescription"] = request.taskDescription;
    }

    if (!$dara.isNull(request.taskName)) {
      body["taskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataCheckTask",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/dataCheck/task/v3/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataCheckTaskResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataCheckTaskResponse({}));
  }

  /**
   * Modifies an existing data validation task. You can adjust the basic task information, source and destination data sources, validation engines, and the referenced validation template.
   * 
   * @remarks
   * ## Operation description
   * Modifies an existing data validation task. You can adjust the task name and description, source and destination data sources, source and destination validation engines, and the validation template referenced by the task. This operation is used to correct configurations or change the source of comparison rules after a task is created.
   * ## Request description
   * - The request body is a JSON object. The `id` field is required and specifies the ID of the data validation task to modify. All other fields are optional. Fields that are not included in the request retain their original values.
   * - `taskName` supports only Chinese characters, English letters, and digits. `taskDescription` specifies the task description.
   * - `srcDsId`, `srcDsName`, and `srcDsType` describe the source data source. `dstDsId`, `dstDsName`, and `dstDsType` describe the destination data source. `srcEngineId`, `srcEngineName`, and `srcEngineType` describe the source validation engine. `dstEngineId`, `dstEngineName`, and `dstEngineType` describe the destination validation engine. Provide the ID, name, and type of a data source or engine as a group to avoid configuration inconsistencies caused by modifying only one of them.
   * - Comparison rules are indirectly adjusted through `checkTemplateId`. After you replace the template, the task runs based on the rules of the new template. If this field is not included, the original template is retained. This operation does not accept table-level detail configurations or scheduling settings. To adjust these settings, use the validation task configuration and scheduling operations.
   * ## Response description
   * The response returns a single value. `data` is an integer business data value returned with the update result. To determine whether the update is successful, check the `success` field. If `success` is `false`, use `errCode` and `errMessage` to identify the cause of the failure. Common causes include a nonexistent task ID, insufficient permissions to modify the task, or a task name that does not meet the character restrictions. `requestId` is used to troubleshoot the call.
   * 
   * @param request - UpdateDataCheckTaskRequest
   * @returns UpdateDataCheckTaskResponse
   */
  async updateDataCheckTask(request: $_model.UpdateDataCheckTaskRequest): Promise<$_model.UpdateDataCheckTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDataCheckTaskWithOptions(request, headers, runtime);
  }

  /**
   * 更新数据校验模版
   * 
   * @remarks
   * ## 接口说明
   * 更新数据校验模板的名称、描述、适用的数据源与引擎范围以及各类校验规则定义。模板被校验任务引用后，更新会改变这些任务后续执行时所采用的比对规则，请在变更前确认影响范围。
   * ## 请求说明
   * - 请求体为 JSON 对象：`templateId` 指定要更新的校验模板 ID，`templateName` 与 `templateDesc` 更新模板名称与描述，`checkType` 为校验规则类型（0 数据量比对、1 指标比对、2 弱内容对比、3 自定义比对、4 全文比对、5 空值率比对），`dsEngineRels` 更新模板关联的数据源与引擎范围。
   * - 规则字段按 `checkType` 取用：指标比对（1）使用 `basicMetricRules`（基础数据类型指标规则，该场景下应使用此字段）、`complexMetricRules`（复合数据类型指标规则）与 `metricRules`（指标规则列表）；弱内容对比（2）使用 `weakContentRule`，该场景下需要一并传入；全文比对（4）使用 `fulltextRule`；空值率比对（5）使用 `nullRules`。与 `checkType` 不匹配的规则字段不会被使用。
   * - `requestId` 选填，为请求 ID。
   * ## 返回说明
   * 返回状态响应，响应体只包含 `success`、`errCode`、`errMessage` 与 `requestId`，不返回业务数据；`success` 为 `true` 即表示模板已更新，无需再回查确认。更新失败时结合 `errCode` 与 `errMessage` 排查，常见原因为模板 ID 不存在、无权修改该模板，或规则字段与 `checkType` 不匹配导致校验不通过。
   * 
   * @param request - UpdateDataCheckTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataCheckTemplateResponse
   */
  async updateDataCheckTemplateWithOptions(request: $_model.UpdateDataCheckTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataCheckTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.basicMetricRules)) {
      body["basicMetricRules"] = request.basicMetricRules;
    }

    if (!$dara.isNull(request.checkType)) {
      body["checkType"] = request.checkType;
    }

    if (!$dara.isNull(request.complexMetricRules)) {
      body["complexMetricRules"] = request.complexMetricRules;
    }

    if (!$dara.isNull(request.dsEngineRels)) {
      body["dsEngineRels"] = request.dsEngineRels;
    }

    if (!$dara.isNull(request.fulltextRule)) {
      body["fulltextRule"] = request.fulltextRule;
    }

    if (!$dara.isNull(request.metricRules)) {
      body["metricRules"] = request.metricRules;
    }

    if (!$dara.isNull(request.nullRules)) {
      body["nullRules"] = request.nullRules;
    }

    if (!$dara.isNull(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    if (!$dara.isNull(request.templateDesc)) {
      body["templateDesc"] = request.templateDesc;
    }

    if (!$dara.isNull(request.templateId)) {
      body["templateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateName)) {
      body["templateName"] = request.templateName;
    }

    if (!$dara.isNull(request.weakContentRule)) {
      body["weakContentRule"] = request.weakContentRule;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataCheckTemplate",
      version: "2025-01-16",
      protocol: "HTTPS",
      pathname: `/dataCheck/template/v3/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataCheckTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataCheckTemplateResponse({}));
  }

  /**
   * 更新数据校验模版
   * 
   * @remarks
   * ## 接口说明
   * 更新数据校验模板的名称、描述、适用的数据源与引擎范围以及各类校验规则定义。模板被校验任务引用后，更新会改变这些任务后续执行时所采用的比对规则，请在变更前确认影响范围。
   * ## 请求说明
   * - 请求体为 JSON 对象：`templateId` 指定要更新的校验模板 ID，`templateName` 与 `templateDesc` 更新模板名称与描述，`checkType` 为校验规则类型（0 数据量比对、1 指标比对、2 弱内容对比、3 自定义比对、4 全文比对、5 空值率比对），`dsEngineRels` 更新模板关联的数据源与引擎范围。
   * - 规则字段按 `checkType` 取用：指标比对（1）使用 `basicMetricRules`（基础数据类型指标规则，该场景下应使用此字段）、`complexMetricRules`（复合数据类型指标规则）与 `metricRules`（指标规则列表）；弱内容对比（2）使用 `weakContentRule`，该场景下需要一并传入；全文比对（4）使用 `fulltextRule`；空值率比对（5）使用 `nullRules`。与 `checkType` 不匹配的规则字段不会被使用。
   * - `requestId` 选填，为请求 ID。
   * ## 返回说明
   * 返回状态响应，响应体只包含 `success`、`errCode`、`errMessage` 与 `requestId`，不返回业务数据；`success` 为 `true` 即表示模板已更新，无需再回查确认。更新失败时结合 `errCode` 与 `errMessage` 排查，常见原因为模板 ID 不存在、无权修改该模板，或规则字段与 `checkType` 不匹配导致校验不通过。
   * 
   * @param request - UpdateDataCheckTemplateRequest
   * @returns UpdateDataCheckTemplateResponse
   */
  async updateDataCheckTemplate(request: $_model.UpdateDataCheckTemplateRequest): Promise<$_model.UpdateDataCheckTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDataCheckTemplateWithOptions(request, headers, runtime);
  }

}
