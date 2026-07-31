// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSemanticJobRequest extends $dara.Model {
  /**
   * @remarks
   * The semantic task name, which also serves as the task identifier for subsequent calls to RunSemanticJob, DeleteSemanticJob, ListSemanticJobRuns, and DownloadSemanticResults. The name must be unique within the current tenant.
   * 
   * This parameter is required.
   * 
   * @example
   * semantic-job-demo
   */
  name?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. This parameter is required for all Source.type values except singleTableFile. The Data.ProjectId in the response can be reused for GetSemanticJobDetail, GetSemanticJobLog, and KillSemanticJob.
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * The list of uploaded reference file IDs. When Source.type=singleTableFile, use either this parameter or ReferenceFileUris, and the selected array must contain exactly one non-empty element. The ID must come from Data.FileId returned by UploadSemanticFile, and only CSV or XLSX files are supported. For other Source.type values, you can pass multiple IDs. The service validates each ID during creation, and you can also pass ReferenceFileUris at the same time.
   */
  referenceFileIds?: string[];
  /**
   * @remarks
   * The list of reference file URIs accessible by the caller. When Source.type=singleTableFile, use either this parameter or ReferenceFileIds, and the selected array must contain exactly one non-empty URI. For other Source.type values, you can pass multiple URIs, and you can also pass ReferenceFileIds at the same time. When using the upload path from UploadSemanticFile, pass Data.FileId after the PUT upload is complete instead of the short-lived UploadUrl.
   */
  referenceFileUris?: string[];
  /**
   * @remarks
   * The ID of the resource group used to run the semantic task. RunSemanticJob does not accept this parameter and instead uses the resource group saved during creation.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-demo
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The input datasource config for the semantic node. The type field is required and specifies the data to be analyzed. This is not the semantic_model YAML produced by the node. The domain field is a character string that identifies the business domain and focus of the node, such as sales. Supported types: 1) maxcompute: Use pinnedScopeInfo to specify the scope. Array elements contain type and name. When type=project, name is the MaxCompute project name. When type=schema, project is the project name and name is the schema name. For table-level scope, project is the project name, schema is optional, and name is the table name. 2) holo or starrocks: In addition to type, provide dataSourceName and dataSourceEnv, and pass ProjectId at the top level of the request. Use pinnedScopeInfo to limit the scope to schemas or tables. The name element is the schema or table name. For table-level scope, schema is the database or schema that contains the table. 3) singleTableFile: ProjectId is not required. Refer to ReferenceFileIds and ReferenceFileUris for file reference rules. After the node runs successfully, call DownloadSemanticResults to obtain the semantic_model YAML and other result files. The example shows a MaxCompute project-level scope. Active pinnedScopeInfo elements define the scope boundaries.
   * 
   * This parameter is required.
   * 
   * @example
   * {"type":"maxcompute","domain":"sales","pinnedScopeInfo":[{"type":"project","name":"mc_project"}]}
   */
  source?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      projectId: 'ProjectId',
      referenceFileIds: 'ReferenceFileIds',
      referenceFileUris: 'ReferenceFileUris',
      resourceGroupId: 'ResourceGroupId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      projectId: 'number',
      referenceFileIds: { 'type': 'array', 'itemType': 'string' },
      referenceFileUris: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      source: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.referenceFileIds)) {
      $dara.Model.validateArray(this.referenceFileIds);
    }
    if(Array.isArray(this.referenceFileUris)) {
      $dara.Model.validateArray(this.referenceFileUris);
    }
    if(this.source) {
      $dara.Model.validateMap(this.source);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

