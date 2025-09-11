// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRdsAnalysisResourceQuotasResponseBodyDBNodeCategoryListDBNodeCategory extends $dara.Model {
  /**
   * @remarks
   * The display value.
   * 
   * @example
   * mixed_storage
   */
  text?: string;
  /**
   * @remarks
   * The real value.
   * 
   * @example
   * mixed_storage
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsAnalysisResourceQuotasResponseBodyDBNodeCategoryList extends $dara.Model {
  DBNodeCategory?: DescribeRdsAnalysisResourceQuotasResponseBodyDBNodeCategoryListDBNodeCategory[];
  static names(): { [key: string]: string } {
    return {
      DBNodeCategory: 'DBNodeCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeCategory: { 'type': 'array', 'itemType': DescribeRdsAnalysisResourceQuotasResponseBodyDBNodeCategoryListDBNodeCategory },
    };
  }

  validate() {
    if(Array.isArray(this.DBNodeCategory)) {
      $dara.Model.validateArray(this.DBNodeCategory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsAnalysisResourceQuotasResponseBodyDBNodeClassListDBNodeClass extends $dara.Model {
  /**
   * @remarks
   * The display value.
   * 
   * @example
   * E32
   */
  text?: string;
  /**
   * @remarks
   * The real value.
   * 
   * @example
   * E32
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsAnalysisResourceQuotasResponseBodyDBNodeClassList extends $dara.Model {
  DBNodeClass?: DescribeRdsAnalysisResourceQuotasResponseBodyDBNodeClassListDBNodeClass[];
  static names(): { [key: string]: string } {
    return {
      DBNodeClass: 'DBNodeClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeClass: { 'type': 'array', 'itemType': DescribeRdsAnalysisResourceQuotasResponseBodyDBNodeClassListDBNodeClass },
    };
  }

  validate() {
    if(Array.isArray(this.DBNodeClass)) {
      $dara.Model.validateArray(this.DBNodeClass);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsAnalysisResourceQuotasResponseBodyDBNodeStorageListDBNodeStorage extends $dara.Model {
  /**
   * @remarks
   * The display value.
   * 
   * @example
   * 100
   */
  text?: string;
  /**
   * @remarks
   * The real value.
   * 
   * @example
   * 100
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsAnalysisResourceQuotasResponseBodyDBNodeStorageList extends $dara.Model {
  DBNodeStorage?: DescribeRdsAnalysisResourceQuotasResponseBodyDBNodeStorageListDBNodeStorage[];
  static names(): { [key: string]: string } {
    return {
      DBNodeStorage: 'DBNodeStorage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeStorage: { 'type': 'array', 'itemType': DescribeRdsAnalysisResourceQuotasResponseBodyDBNodeStorageListDBNodeStorage },
    };
  }

  validate() {
    if(Array.isArray(this.DBNodeStorage)) {
      $dara.Model.validateArray(this.DBNodeStorage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsAnalysisResourceQuotasResponseBodyEngineVersionListEngineVersion extends $dara.Model {
  /**
   * @remarks
   * The display value.
   * 
   * @example
   * 3.0
   */
  text?: string;
  /**
   * @remarks
   * The real value.
   * 
   * @example
   * 3.0
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsAnalysisResourceQuotasResponseBodyEngineVersionList extends $dara.Model {
  engineVersion?: DescribeRdsAnalysisResourceQuotasResponseBodyEngineVersionListEngineVersion[];
  static names(): { [key: string]: string } {
    return {
      engineVersion: 'EngineVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineVersion: { 'type': 'array', 'itemType': DescribeRdsAnalysisResourceQuotasResponseBodyEngineVersionListEngineVersion },
    };
  }

  validate() {
    if(Array.isArray(this.engineVersion)) {
      $dara.Model.validateArray(this.engineVersion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsAnalysisResourceQuotasResponseBodyModeListMode extends $dara.Model {
  /**
   * @remarks
   * The display value.
   * 
   * @example
   * flexible
   */
  text?: string;
  /**
   * @remarks
   * The real value.
   * 
   * @example
   * flexible
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsAnalysisResourceQuotasResponseBodyModeList extends $dara.Model {
  mode?: DescribeRdsAnalysisResourceQuotasResponseBodyModeListMode[];
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: { 'type': 'array', 'itemType': DescribeRdsAnalysisResourceQuotasResponseBodyModeListMode },
    };
  }

  validate() {
    if(Array.isArray(this.mode)) {
      $dara.Model.validateArray(this.mode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsAnalysisResourceQuotasResponseBodyStorageTypeListStorageType extends $dara.Model {
  /**
   * @remarks
   * The display value.
   * 
   * @example
   * cloud_essd
   */
  text?: string;
  /**
   * @remarks
   * The real value.
   * 
   * @example
   * cloud_essd
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsAnalysisResourceQuotasResponseBodyStorageTypeList extends $dara.Model {
  storageType?: DescribeRdsAnalysisResourceQuotasResponseBodyStorageTypeListStorageType[];
  static names(): { [key: string]: string } {
    return {
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageType: { 'type': 'array', 'itemType': DescribeRdsAnalysisResourceQuotasResponseBodyStorageTypeListStorageType },
    };
  }

  validate() {
    if(Array.isArray(this.storageType)) {
      $dara.Model.validateArray(this.storageType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

