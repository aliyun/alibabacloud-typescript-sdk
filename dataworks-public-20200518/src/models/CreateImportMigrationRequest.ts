// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImportMigrationRequest extends $dara.Model {
  /**
   * @remarks
   * The mapping between the source compute engine instance and the destination compute engine instance. The following types of compute engine instances are supported: MaxCompute, E-MapReduce (EMR), Hadoop CDH, and Hologres.
   * 
   * @example
   * {     "ODPS": {       "zxy_8221431_engine": "wzp_kaifazheban_engine"     },     "EMR": {         "aaaa": "bbb"     }   }
   */
  calculateEngineMap?: string;
  /**
   * @remarks
   * The rule configured for automatically committing and deploying the import task. The rule contains the following parameters:
   * 
   * *   resourceAutoCommit: specifies whether resources are automatically committed. The value true indicates yes and the value false indicates no.
   * *   resourceAutoDeploy: specifies whether resources are automatically deployed. The value true indicates yes and the value false indicates no.
   * *   functionAutoCommit: specifies whether the function is automatically committed. The value true indicates yes and the value false indicates no.
   * *   functionAutoDeploy: specifies whether the function is automatically deployed. The value true indicates yes and the value false indicates no.
   * *   tableAutoCommitToDev: specifies whether the table is automatically committed to the development environment. The value true indicates yes and the value false indicates no.
   * *   tableAutoCommitToProd: specifies whether the table is automatically committed to the production environment. The value true indicates yes and the value false indicates no.
   * *   ignoreLock: specifies whether the lock is automatically ignored when an import task is locked. The value true indicates yes and the value false indicates no. If you set this parameter to true for an import task, you can forcefully update the task even if the task is locked.
   * *   fileAutoCommit: specifies whether the file is automatically committed. The value true indicates yes and the value false indicates no.
   * *   fileAutoDeploy: specifies whether the file is automatically deployed. The value true indicates yes and the value false indicates no.
   * 
   * @example
   * {     "resourceAutoCommit": false,     "resourceAutoDeploy": false,     "functionAutoCommit": false,     "functionAutoDeploy": false,     "tableAutoCommitToDev": false,     "tableAutoCommitToProd": false,     "ignoreLock": false,     "fileAutoCommit": false,     "fileAutoDeploy": false   }
   */
  commitRule?: string;
  /**
   * @remarks
   * The description of the import package.
   * 
   * @example
   * test description
   */
  description?: string;
  /**
   * @remarks
   * The name of the import task. The name must be unique within the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * test_import_001
   */
  name?: string;
  /**
   * @remarks
   * The path of the import package. **The import package must be uploaded. Example of the upload method:**
   * 
   * ```java
   *         Config config = new Config();
   *         config.setAccessKeyId(accessId);
   *         config.setAccessKeySecret(accessKey);
   *         config.setEndpoint(popEndpoint);
   *         config.setRegionId(regionId);
   * 
   *         Client client = new Client(config);
   * 
   *         CreateImportMigrationAdvanceRequest request = new CreateImportMigrationAdvanceRequest();
   *         request.setName("test_migration_api_" + System.currentTimeMillis());
   *         request.setProjectId(123456L); 
   *         request.setPackageType("DATAWORKS_MODEL");
   *         request.setPackageFileObject(new FileInputStream("/home/admin/Downloads/test.zip"));
   * 
   *         RuntimeOptions runtime = new RuntimeOptions();
   *         CreateImportMigrationResponse response = client.createImportMigrationAdvance(request, runtime);
   * ```
   * 
   * This parameter is required.
   * 
   * @example
   * /home/admin/xxx/import.zip
   */
  packageFile?: string;
  /**
   * @remarks
   * The type of the import package. Valid values:
   * 
   * *   DATAWORKS_MODEL (standard format)
   * *   DATAWORKS_V2 (Apsara Stack DataWorks V3.6.1 to V3.11)
   * *   DATAWORKS_V3 (Apsara Stack DataWorks V3.12 and later)
   * 
   * This parameter is required.
   * 
   * @example
   * DATAWORKS_MODEL
   */
  packageType?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the DataWorks console and go to the Workspace page to obtain the workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  projectId?: number;
  /**
   * @remarks
   * The mapping between the resource group for scheduling and the resource group for Data Integration. The keys and values in the mapping are the identifiers of the resource groups. Specify the mapping in the following format:
   * 
   * ```json
   * {
   *     "SCHEDULER_RESOURCE_GROUP": {
   *         "xxx": "yyy"
   *     },
   *     "DI_RESOURCE_GROUP": {
   *         "ccc": "dfdd"
   *     }
   * }
   * ```
   * 
   * @example
   * {"SCHEDULER_RESOURCE_GROUP": {"xxx":"yyy"},"DI_RESOURCE_GROUP":{"ccc":"ddd"}}
   */
  resourceGroupMap?: string;
  /**
   * @remarks
   * The mapping between the prefixes for the names of the source and destination workspaces. When the system performs the import operation, the prefix for the name of the source workspace in the import package is replaced based on the mapping.
   * 
   * @example
   * {"test_workspace_src": "test_workspace_target"}
   */
  workspaceMap?: string;
  static names(): { [key: string]: string } {
    return {
      calculateEngineMap: 'CalculateEngineMap',
      commitRule: 'CommitRule',
      description: 'Description',
      name: 'Name',
      packageFile: 'PackageFile',
      packageType: 'PackageType',
      projectId: 'ProjectId',
      resourceGroupMap: 'ResourceGroupMap',
      workspaceMap: 'WorkspaceMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calculateEngineMap: 'string',
      commitRule: 'string',
      description: 'string',
      name: 'string',
      packageFile: 'string',
      packageType: 'string',
      projectId: 'number',
      resourceGroupMap: 'string',
      workspaceMap: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

