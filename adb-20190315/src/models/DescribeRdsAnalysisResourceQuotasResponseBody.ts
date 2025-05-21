// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRdsAnalysisResourceQuotasResponseBodyDBNodeCategoryList } from "./DescribeRdsAnalysisResourceQuotasResponseBodyDbnodeCategoryList";
import { DescribeRdsAnalysisResourceQuotasResponseBodyDBNodeClassList } from "./DescribeRdsAnalysisResourceQuotasResponseBodyDbnodeClassList";
import { DescribeRdsAnalysisResourceQuotasResponseBodyDBNodeStorageList } from "./DescribeRdsAnalysisResourceQuotasResponseBodyDbnodeStorageList";
import { DescribeRdsAnalysisResourceQuotasResponseBodyEngineVersionList } from "./DescribeRdsAnalysisResourceQuotasResponseBodyEngineVersionList";
import { DescribeRdsAnalysisResourceQuotasResponseBodyModeList } from "./DescribeRdsAnalysisResourceQuotasResponseBodyModeList";
import { DescribeRdsAnalysisResourceQuotasResponseBodyStorageTypeList } from "./DescribeRdsAnalysisResourceQuotasResponseBodyStorageTypeList";


export class DescribeRdsAnalysisResourceQuotasResponseBody extends $dara.Model {
  /**
   * @remarks
   * The editions of the MySQL analytic instances.
   */
  DBNodeCategoryList?: DescribeRdsAnalysisResourceQuotasResponseBodyDBNodeCategoryList;
  /**
   * @remarks
   * The instance types of the MySQL analytic instances.
   */
  DBNodeClassList?: DescribeRdsAnalysisResourceQuotasResponseBodyDBNodeClassList;
  /**
   * @remarks
   * The storage sizes of the MySQL analytic instances.
   */
  DBNodeStorageList?: DescribeRdsAnalysisResourceQuotasResponseBodyDBNodeStorageList;
  /**
   * @remarks
   * The versions of the MySQL analytic instances.
   */
  engineVersionList?: DescribeRdsAnalysisResourceQuotasResponseBodyEngineVersionList;
  /**
   * @remarks
   * The modes of the MySQL analytic instances.
   */
  modeList?: DescribeRdsAnalysisResourceQuotasResponseBodyModeList;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1A31D7FA-1826-5843-8807-D2F715E70CB0
   */
  requestId?: string;
  /**
   * @remarks
   * The storage types of the MySQL analytic instances.
   */
  storageTypeList?: DescribeRdsAnalysisResourceQuotasResponseBodyStorageTypeList;
  static names(): { [key: string]: string } {
    return {
      DBNodeCategoryList: 'DBNodeCategoryList',
      DBNodeClassList: 'DBNodeClassList',
      DBNodeStorageList: 'DBNodeStorageList',
      engineVersionList: 'EngineVersionList',
      modeList: 'ModeList',
      requestId: 'RequestId',
      storageTypeList: 'StorageTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeCategoryList: DescribeRdsAnalysisResourceQuotasResponseBodyDBNodeCategoryList,
      DBNodeClassList: DescribeRdsAnalysisResourceQuotasResponseBodyDBNodeClassList,
      DBNodeStorageList: DescribeRdsAnalysisResourceQuotasResponseBodyDBNodeStorageList,
      engineVersionList: DescribeRdsAnalysisResourceQuotasResponseBodyEngineVersionList,
      modeList: DescribeRdsAnalysisResourceQuotasResponseBodyModeList,
      requestId: 'string',
      storageTypeList: DescribeRdsAnalysisResourceQuotasResponseBodyStorageTypeList,
    };
  }

  validate() {
    if(this.DBNodeCategoryList && typeof (this.DBNodeCategoryList as any).validate === 'function') {
      (this.DBNodeCategoryList as any).validate();
    }
    if(this.DBNodeClassList && typeof (this.DBNodeClassList as any).validate === 'function') {
      (this.DBNodeClassList as any).validate();
    }
    if(this.DBNodeStorageList && typeof (this.DBNodeStorageList as any).validate === 'function') {
      (this.DBNodeStorageList as any).validate();
    }
    if(this.engineVersionList && typeof (this.engineVersionList as any).validate === 'function') {
      (this.engineVersionList as any).validate();
    }
    if(this.modeList && typeof (this.modeList as any).validate === 'function') {
      (this.modeList as any).validate();
    }
    if(this.storageTypeList && typeof (this.storageTypeList as any).validate === 'function') {
      (this.storageTypeList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

