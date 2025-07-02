// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryDatasetInfoResponseBodyResultCubeTableList } from "./QueryDatasetInfoResponseBodyResultCubeTableList";
import { QueryDatasetInfoResponseBodyResultDimensionList } from "./QueryDatasetInfoResponseBodyResultDimensionList";
import { QueryDatasetInfoResponseBodyResultDirectory } from "./QueryDatasetInfoResponseBodyResultDirectory";
import { QueryDatasetInfoResponseBodyResultMeasureList } from "./QueryDatasetInfoResponseBodyResultMeasureList";


export class QueryDatasetInfoResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the dataset.
   */
  cubeTableList?: QueryDatasetInfoResponseBodyResultCubeTableList[];
  /**
   * @remarks
   * The unique ID of the workspace to which the dataset belongs.
   * 
   * @example
   * false
   */
  custimzeSql?: boolean;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   mysql
   * *   odps
   * *   oracle
   * *   ... Data source types supported by Quick BI such as
   * 
   * @example
   * a201c85c-******
   */
  datasetId?: string;
  /**
   * @remarks
   * The user ID of the dataset owner in the Quick BI.
   * 
   * @example
   * opds_40
   */
  datasetName?: string;
  /**
   * @remarks
   * A list of all dimensions in the dataset.
   */
  dimensionList?: QueryDatasetInfoResponseBodyResultDimensionList[];
  /**
   * @remarks
   * The unique ID of the metric.
   */
  directory?: QueryDatasetInfoResponseBodyResultDirectory;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * a201c85c-******
   */
  dsId?: string;
  /**
   * @remarks
   * The time when the dataset was last modified.
   * 
   * @example
   * odps
   */
  dsName?: string;
  /**
   * @remarks
   * The point in time when the training dataset was created.
   * 
   * @example
   * odps
   */
  dsType?: string;
  /**
   * @remarks
   * Indicates whether to customize SQL statements. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * 1629450382000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The information about the dataset.
   * 
   * @example
   * 1629450382000
   */
  gmtModify?: string;
  /**
   * @remarks
   * A list of all measures for the dataset.
   */
  measureList?: QueryDatasetInfoResponseBodyResultMeasureList[];
  /**
   * @remarks
   * Whether to enable extraction acceleration. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  openOfflineAcceleration?: boolean;
  /**
   * @remarks
   * Test Space
   * 
   * @example
   * b8494aab26124*****
   */
  ownerId?: string;
  /**
   * @remarks
   * The unique ID of the data source.
   * 
   * @example
   * The name of the dataset owner.
   */
  ownerName?: string;
  /**
   * @remarks
   * The name of the training dataset.
   * 
   * @example
   * false
   */
  rowLevel?: boolean;
  /**
   * @remarks
   * Whether row-level permissions are enabled. Valid values:
   * 
   * *   true: The VIP Netty channel is enabled.
   * *   false: The VIP Netty channel is disabled.
   * 
   * @example
   * 420abef4-a79b-4289-b12****
   */
  workspaceId?: string;
  /**
   * @remarks
   * Big Baby
   * 
   * @example
   * The name of the workspace in which the dataset resides.
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      cubeTableList: 'CubeTableList',
      custimzeSql: 'CustimzeSql',
      datasetId: 'DatasetId',
      datasetName: 'DatasetName',
      dimensionList: 'DimensionList',
      directory: 'Directory',
      dsId: 'DsId',
      dsName: 'DsName',
      dsType: 'DsType',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      measureList: 'MeasureList',
      openOfflineAcceleration: 'OpenOfflineAcceleration',
      ownerId: 'OwnerId',
      ownerName: 'OwnerName',
      rowLevel: 'RowLevel',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cubeTableList: { 'type': 'array', 'itemType': QueryDatasetInfoResponseBodyResultCubeTableList },
      custimzeSql: 'boolean',
      datasetId: 'string',
      datasetName: 'string',
      dimensionList: { 'type': 'array', 'itemType': QueryDatasetInfoResponseBodyResultDimensionList },
      directory: QueryDatasetInfoResponseBodyResultDirectory,
      dsId: 'string',
      dsName: 'string',
      dsType: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      measureList: { 'type': 'array', 'itemType': QueryDatasetInfoResponseBodyResultMeasureList },
      openOfflineAcceleration: 'boolean',
      ownerId: 'string',
      ownerName: 'string',
      rowLevel: 'boolean',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cubeTableList)) {
      $dara.Model.validateArray(this.cubeTableList);
    }
    if(Array.isArray(this.dimensionList)) {
      $dara.Model.validateArray(this.dimensionList);
    }
    if(this.directory && typeof (this.directory as any).validate === 'function') {
      (this.directory as any).validate();
    }
    if(Array.isArray(this.measureList)) {
      $dara.Model.validateArray(this.measureList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

