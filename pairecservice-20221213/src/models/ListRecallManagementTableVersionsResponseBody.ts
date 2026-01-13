// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecallManagementTableVersionsResponseBodyRecallManagementTableVersions extends $dara.Model {
  dataVersion?: string;
  effectiveTime?: string;
  publishEndTime?: string;
  publishStartTime?: string;
  recallManagementTableVersionId?: string;
  sourceTableDataSize?: number;
  sourceTableRowCount?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      dataVersion: 'DataVersion',
      effectiveTime: 'EffectiveTime',
      publishEndTime: 'PublishEndTime',
      publishStartTime: 'PublishStartTime',
      recallManagementTableVersionId: 'RecallManagementTableVersionId',
      sourceTableDataSize: 'SourceTableDataSize',
      sourceTableRowCount: 'SourceTableRowCount',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataVersion: 'string',
      effectiveTime: 'string',
      publishEndTime: 'string',
      publishStartTime: 'string',
      recallManagementTableVersionId: 'string',
      sourceTableDataSize: 'number',
      sourceTableRowCount: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecallManagementTableVersionsResponseBody extends $dara.Model {
  recallManagementTableVersions?: ListRecallManagementTableVersionsResponseBodyRecallManagementTableVersions[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      recallManagementTableVersions: 'RecallManagementTableVersions',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recallManagementTableVersions: { 'type': 'array', 'itemType': ListRecallManagementTableVersionsResponseBodyRecallManagementTableVersions },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.recallManagementTableVersions)) {
      $dara.Model.validateArray(this.recallManagementTableVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

