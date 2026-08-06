// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSemanticJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The semantic job name, which also serves as the job identifier for subsequent calls to RunSemanticJob, DeleteSemanticJob, ListSemanticJobRuns, and DownloadSemanticResults. The name must be unique within the current tenant.
   * 
   * This parameter is required.
   * 
   * @example
   * semantic-job-demo
   */
  name?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. This parameter is required for all Source.type values except singleTableFile. The Data.ProjectId in the creation result can be reused for GetSemanticJobDetail, GetSemanticJobLog, and KillSemanticJob.
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * The list of uploaded reference file IDs. When Source.type=singleTableFile, use either this parameter or ReferenceFileUris, and the selected array must contain exactly one non-empty element. The ID must come from Data.FileId returned by UploadSemanticFile, and only CSV or XLSX files are supported. For other Source.type values, you can pass multiple IDs. The service validates each ID during creation, and you can also pass ReferenceFileUris at the same time.
   */
  referenceFileIdsShrink?: string;
  /**
   * @remarks
   * The list of reference file URIs accessible by the caller. When Source.type=singleTableFile, use either this parameter or ReferenceFileIds, and the selected array must contain exactly one non-empty URI. For other Source.type values, you can pass multiple URIs and also pass ReferenceFileIds at the same time. When using the upload path from UploadSemanticFile, pass Data.FileId after the PUT upload is complete instead of the short-lived UploadUrl.
   */
  referenceFileUrisShrink?: string;
  /**
   * @remarks
   * The ID of the resource group used to run the semantic job. RunSemanticJob does not accept this parameter and instead uses the resource group saved during creation.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-demo
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The input datasource config for the semantic node. The type field is required. This parameter specifies the data to be analyzed and is not the semantic_model YAML output. The domain field is a character string that serves as the identity of the business domain and focus of the node, such as sales. Supported types: 1) maxcompute: Use pinnedScopeInfo to specify the scope. Array elements contain type and name. When type=project, name is the MaxCompute project name. When type=schema, project is the project name and name is the schema name. For table-level scope, project is the project name, schema is optional, and name is the table name. 2) holo or starrocks: In addition to type, you must specify dataSourceName and dataSourceEnv, and pass ProjectId at the top level of the request. You can use pinnedScopeInfo to limit the scope to schemas or tables. The name element is the schema or table name, and the schema element for table-level scope is the database or schema. 3) singleTableFile: ProjectId is not required. For file reference rules, see ReferenceFileIds and ReferenceFileUris. After the node runs successfully, use DownloadSemanticResults to retrieve the semantic_model YAML and other result files. The example shows a MaxCompute project-level scope.
   * 
   * This parameter is required.
   * 
   * @example
   * {"type":"maxcompute","domain":"sales","pinnedScopeInfo":[{"type":"project","name":"mc_project"}]}
   */
  sourceShrink?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      projectId: 'ProjectId',
      referenceFileIdsShrink: 'ReferenceFileIds',
      referenceFileUrisShrink: 'ReferenceFileUris',
      resourceGroupId: 'ResourceGroupId',
      sourceShrink: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      projectId: 'number',
      referenceFileIdsShrink: 'string',
      referenceFileUrisShrink: 'string',
      resourceGroupId: 'string',
      sourceShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

