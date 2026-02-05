// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceApplyResponseBodyDataListAppointments extends $dara.Model {
  huhangId?: number;
  purchaseCode?: number;
  purchaseDesc?: string;
  supportDays?: number;
  travelDays?: number;
  static names(): { [key: string]: string } {
    return {
      huhangId: 'huhangId',
      purchaseCode: 'purchaseCode',
      purchaseDesc: 'purchaseDesc',
      supportDays: 'supportDays',
      travelDays: 'travelDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      huhangId: 'number',
      purchaseCode: 'number',
      purchaseDesc: 'string',
      supportDays: 'number',
      travelDays: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceApplyResponseBodyDataListPayOrders extends $dara.Model {
  amount?: string;
  compassCommodityCode?: string;
  compassCommodityName?: string;
  creatorEmpId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  modifierEmpId?: string;
  operate?: { [key: string]: any };
  orderDetail?: any;
  orderId?: number;
  originalPrice?: number;
  payAmount?: number;
  payTime?: string;
  productName?: string;
  reneWalUrl?: string;
  serviceContentMap?: { [key: string]: any };
  status?: number;
  statusStr?: string;
  supportDays?: number;
  uid?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      compassCommodityCode: 'compassCommodityCode',
      compassCommodityName: 'compassCommodityName',
      creatorEmpId: 'creatorEmpId',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      modifierEmpId: 'modifierEmpId',
      operate: 'operate',
      orderDetail: 'orderDetail',
      orderId: 'orderId',
      originalPrice: 'originalPrice',
      payAmount: 'payAmount',
      payTime: 'payTime',
      productName: 'productName',
      reneWalUrl: 'reneWalUrl',
      serviceContentMap: 'serviceContentMap',
      status: 'status',
      statusStr: 'statusStr',
      supportDays: 'supportDays',
      uid: 'uid',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      compassCommodityCode: 'string',
      compassCommodityName: 'string',
      creatorEmpId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      modifierEmpId: 'string',
      operate: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      orderDetail: 'any',
      orderId: 'number',
      originalPrice: 'number',
      payAmount: 'number',
      payTime: 'string',
      productName: 'string',
      reneWalUrl: 'string',
      serviceContentMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      status: 'number',
      statusStr: 'string',
      supportDays: 'number',
      uid: 'string',
      url: 'string',
    };
  }

  validate() {
    if(this.operate) {
      $dara.Model.validateMap(this.operate);
    }
    if(this.serviceContentMap) {
      $dara.Model.validateMap(this.serviceContentMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceApplyResponseBodyDataListPerformanceOrdersApplyFileVOList extends $dara.Model {
  appointmentId?: string;
  batchGroup?: string;
  customerId?: string;
  fileName?: string;
  fileType?: number;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  remarke?: string;
  serviceApplyId?: number;
  status?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      appointmentId: 'appointmentId',
      batchGroup: 'batchGroup',
      customerId: 'customerId',
      fileName: 'fileName',
      fileType: 'fileType',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      remarke: 'remarke',
      serviceApplyId: 'serviceApplyId',
      status: 'status',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appointmentId: 'string',
      batchGroup: 'string',
      customerId: 'string',
      fileName: 'string',
      fileType: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      remarke: 'string',
      serviceApplyId: 'number',
      status: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceApplyResponseBodyDataListPerformanceOrdersExtList extends $dara.Model {
  keyCode?: string;
  name?: string;
  value?: any;
  view?: string;
  static names(): { [key: string]: string } {
    return {
      keyCode: 'keyCode',
      name: 'name',
      value: 'value',
      view: 'view',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyCode: 'string',
      name: 'string',
      value: 'any',
      view: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceApplyResponseBodyDataListPerformanceOrdersPerformanceNodeDTOS extends $dara.Model {
  display?: boolean;
  extendInfo?: any;
  index?: number;
  nodeName?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      display: 'display',
      extendInfo: 'extendInfo',
      index: 'index',
      nodeName: 'nodeName',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      display: 'boolean',
      extendInfo: 'any',
      index: 'number',
      nodeName: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceApplyResponseBodyDataListPerformanceOrdersPerformancePacksApplyFileVOList extends $dara.Model {
  appointmentId?: string;
  batchGroup?: string;
  customerId?: string;
  fileName?: string;
  fileType?: number;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  remarke?: string;
  serviceApplyId?: number;
  status?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      appointmentId: 'appointmentId',
      batchGroup: 'batchGroup',
      customerId: 'customerId',
      fileName: 'fileName',
      fileType: 'fileType',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      remarke: 'remarke',
      serviceApplyId: 'serviceApplyId',
      status: 'status',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appointmentId: 'string',
      batchGroup: 'string',
      customerId: 'string',
      fileName: 'string',
      fileType: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      remarke: 'string',
      serviceApplyId: 'number',
      status: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceApplyResponseBodyDataListPerformanceOrdersPerformancePacksExtList extends $dara.Model {
  keyCode?: string;
  name?: string;
  value?: any;
  view?: string;
  static names(): { [key: string]: string } {
    return {
      keyCode: 'keyCode',
      name: 'name',
      value: 'value',
      view: 'view',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyCode: 'string',
      name: 'string',
      value: 'any',
      view: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceApplyResponseBodyDataListPerformanceOrdersPerformancePacksPerformanceNodeDTOS extends $dara.Model {
  display?: boolean;
  extendInfo?: any;
  index?: number;
  nodeName?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      display: 'display',
      extendInfo: 'extendInfo',
      index: 'index',
      nodeName: 'nodeName',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      display: 'boolean',
      extendInfo: 'any',
      index: 'number',
      nodeName: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceApplyResponseBodyDataListPerformanceOrdersPerformancePacksServiceMonthReports extends $dara.Model {
  appointmentId?: string;
  batchGroup?: string;
  customerId?: string;
  fileName?: string;
  fileType?: number;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  remarke?: string;
  serviceApplyId?: number;
  status?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      appointmentId: 'appointmentId',
      batchGroup: 'batchGroup',
      customerId: 'customerId',
      fileName: 'fileName',
      fileType: 'fileType',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      remarke: 'remarke',
      serviceApplyId: 'serviceApplyId',
      status: 'status',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appointmentId: 'string',
      batchGroup: 'string',
      customerId: 'string',
      fileName: 'string',
      fileType: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      remarke: 'string',
      serviceApplyId: 'number',
      status: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceApplyResponseBodyDataListPerformanceOrdersPerformancePacksServiceReports extends $dara.Model {
  appointmentId?: string;
  batchGroup?: string;
  customerId?: string;
  fileName?: string;
  fileType?: number;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  remarke?: string;
  serviceApplyId?: number;
  status?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      appointmentId: 'appointmentId',
      batchGroup: 'batchGroup',
      customerId: 'customerId',
      fileName: 'fileName',
      fileType: 'fileType',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      remarke: 'remarke',
      serviceApplyId: 'serviceApplyId',
      status: 'status',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appointmentId: 'string',
      batchGroup: 'string',
      customerId: 'string',
      fileName: 'string',
      fileType: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      remarke: 'string',
      serviceApplyId: 'number',
      status: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceApplyResponseBodyDataListPerformanceOrdersPerformancePacksServiceSchemes extends $dara.Model {
  appointmentId?: string;
  batchGroup?: string;
  customerId?: string;
  fileName?: string;
  fileType?: number;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  remarke?: string;
  serviceApplyId?: number;
  status?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      appointmentId: 'appointmentId',
      batchGroup: 'batchGroup',
      customerId: 'customerId',
      fileName: 'fileName',
      fileType: 'fileType',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      remarke: 'remarke',
      serviceApplyId: 'serviceApplyId',
      status: 'status',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appointmentId: 'string',
      batchGroup: 'string',
      customerId: 'string',
      fileName: 'string',
      fileType: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      remarke: 'string',
      serviceApplyId: 'number',
      status: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceApplyResponseBodyDataListPerformanceOrdersPerformancePacksTamEngineers extends $dara.Model {
  creatorEmpId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  hrStatus?: string;
  id?: number;
  lastName?: string;
  modifierEmpId?: string;
  name?: string;
  nickNameEn?: string;
  realmId?: number;
  workid?: string;
  static names(): { [key: string]: string } {
    return {
      creatorEmpId: 'creatorEmpId',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      hrStatus: 'hrStatus',
      id: 'id',
      lastName: 'lastName',
      modifierEmpId: 'modifierEmpId',
      name: 'name',
      nickNameEn: 'nickNameEn',
      realmId: 'realmId',
      workid: 'workid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorEmpId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      hrStatus: 'string',
      id: 'number',
      lastName: 'string',
      modifierEmpId: 'string',
      name: 'string',
      nickNameEn: 'string',
      realmId: 'number',
      workid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceApplyResponseBodyDataListPerformanceOrdersPerformancePacks extends $dara.Model {
  applyFileVOList?: ListServiceApplyResponseBodyDataListPerformanceOrdersPerformancePacksApplyFileVOList[];
  appointmentCode?: string;
  appointmentEndTime?: number;
  appointmentId?: string;
  appointmentPassTime?: number;
  appointmentTime?: number;
  commodityDesc?: string;
  creatorEmpId?: string;
  cycleService?: boolean;
  extList?: ListServiceApplyResponseBodyDataListPerformanceOrdersPerformancePacksExtList[];
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  mergeSolutionAndReporterOneStep?: boolean;
  modifierEmpId?: string;
  ntmCommodityCode?: string;
  orderDetail?: any;
  orderId?: number;
  performanceNodeDTOS?: ListServiceApplyResponseBodyDataListPerformanceOrdersPerformancePacksPerformanceNodeDTOS[];
  purchasePackCode?: number;
  serviceApplyId?: number;
  serviceMonthReports?: ListServiceApplyResponseBodyDataListPerformanceOrdersPerformancePacksServiceMonthReports[];
  serviceReports?: ListServiceApplyResponseBodyDataListPerformanceOrdersPerformancePacksServiceReports[];
  serviceSchemes?: ListServiceApplyResponseBodyDataListPerformanceOrdersPerformancePacksServiceSchemes[];
  status?: number;
  statusStr?: string;
  supportTime?: number[];
  tamEngineers?: ListServiceApplyResponseBodyDataListPerformanceOrdersPerformancePacksTamEngineers[];
  static names(): { [key: string]: string } {
    return {
      applyFileVOList: 'applyFileVOList',
      appointmentCode: 'appointmentCode',
      appointmentEndTime: 'appointmentEndTime',
      appointmentId: 'appointmentId',
      appointmentPassTime: 'appointmentPassTime',
      appointmentTime: 'appointmentTime',
      commodityDesc: 'commodityDesc',
      creatorEmpId: 'creatorEmpId',
      cycleService: 'cycleService',
      extList: 'extList',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      mergeSolutionAndReporterOneStep: 'mergeSolutionAndReporterOneStep',
      modifierEmpId: 'modifierEmpId',
      ntmCommodityCode: 'ntmCommodityCode',
      orderDetail: 'orderDetail',
      orderId: 'orderId',
      performanceNodeDTOS: 'performanceNodeDTOS',
      purchasePackCode: 'purchasePackCode',
      serviceApplyId: 'serviceApplyId',
      serviceMonthReports: 'serviceMonthReports',
      serviceReports: 'serviceReports',
      serviceSchemes: 'serviceSchemes',
      status: 'status',
      statusStr: 'statusStr',
      supportTime: 'supportTime',
      tamEngineers: 'tamEngineers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyFileVOList: { 'type': 'array', 'itemType': ListServiceApplyResponseBodyDataListPerformanceOrdersPerformancePacksApplyFileVOList },
      appointmentCode: 'string',
      appointmentEndTime: 'number',
      appointmentId: 'string',
      appointmentPassTime: 'number',
      appointmentTime: 'number',
      commodityDesc: 'string',
      creatorEmpId: 'string',
      cycleService: 'boolean',
      extList: { 'type': 'array', 'itemType': ListServiceApplyResponseBodyDataListPerformanceOrdersPerformancePacksExtList },
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      mergeSolutionAndReporterOneStep: 'boolean',
      modifierEmpId: 'string',
      ntmCommodityCode: 'string',
      orderDetail: 'any',
      orderId: 'number',
      performanceNodeDTOS: { 'type': 'array', 'itemType': ListServiceApplyResponseBodyDataListPerformanceOrdersPerformancePacksPerformanceNodeDTOS },
      purchasePackCode: 'number',
      serviceApplyId: 'number',
      serviceMonthReports: { 'type': 'array', 'itemType': ListServiceApplyResponseBodyDataListPerformanceOrdersPerformancePacksServiceMonthReports },
      serviceReports: { 'type': 'array', 'itemType': ListServiceApplyResponseBodyDataListPerformanceOrdersPerformancePacksServiceReports },
      serviceSchemes: { 'type': 'array', 'itemType': ListServiceApplyResponseBodyDataListPerformanceOrdersPerformancePacksServiceSchemes },
      status: 'number',
      statusStr: 'string',
      supportTime: { 'type': 'array', 'itemType': 'number' },
      tamEngineers: { 'type': 'array', 'itemType': ListServiceApplyResponseBodyDataListPerformanceOrdersPerformancePacksTamEngineers },
    };
  }

  validate() {
    if(Array.isArray(this.applyFileVOList)) {
      $dara.Model.validateArray(this.applyFileVOList);
    }
    if(Array.isArray(this.extList)) {
      $dara.Model.validateArray(this.extList);
    }
    if(Array.isArray(this.performanceNodeDTOS)) {
      $dara.Model.validateArray(this.performanceNodeDTOS);
    }
    if(Array.isArray(this.serviceMonthReports)) {
      $dara.Model.validateArray(this.serviceMonthReports);
    }
    if(Array.isArray(this.serviceReports)) {
      $dara.Model.validateArray(this.serviceReports);
    }
    if(Array.isArray(this.serviceSchemes)) {
      $dara.Model.validateArray(this.serviceSchemes);
    }
    if(Array.isArray(this.supportTime)) {
      $dara.Model.validateArray(this.supportTime);
    }
    if(Array.isArray(this.tamEngineers)) {
      $dara.Model.validateArray(this.tamEngineers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceApplyResponseBodyDataListPerformanceOrdersServiceMonthReports extends $dara.Model {
  appointmentId?: string;
  batchGroup?: string;
  customerId?: string;
  fileName?: string;
  fileType?: number;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  remarke?: string;
  serviceApplyId?: number;
  status?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      appointmentId: 'appointmentId',
      batchGroup: 'batchGroup',
      customerId: 'customerId',
      fileName: 'fileName',
      fileType: 'fileType',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      remarke: 'remarke',
      serviceApplyId: 'serviceApplyId',
      status: 'status',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appointmentId: 'string',
      batchGroup: 'string',
      customerId: 'string',
      fileName: 'string',
      fileType: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      remarke: 'string',
      serviceApplyId: 'number',
      status: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceApplyResponseBodyDataListPerformanceOrdersServiceReports extends $dara.Model {
  appointmentId?: string;
  batchGroup?: string;
  customerId?: string;
  fileName?: string;
  fileType?: number;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  remarke?: string;
  serviceApplyId?: number;
  status?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      appointmentId: 'appointmentId',
      batchGroup: 'batchGroup',
      customerId: 'customerId',
      fileName: 'fileName',
      fileType: 'fileType',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      remarke: 'remarke',
      serviceApplyId: 'serviceApplyId',
      status: 'status',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appointmentId: 'string',
      batchGroup: 'string',
      customerId: 'string',
      fileName: 'string',
      fileType: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      remarke: 'string',
      serviceApplyId: 'number',
      status: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceApplyResponseBodyDataListPerformanceOrdersServiceSchemes extends $dara.Model {
  appointmentId?: string;
  batchGroup?: string;
  customerId?: string;
  fileName?: string;
  fileType?: number;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  remarke?: string;
  serviceApplyId?: number;
  status?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      appointmentId: 'appointmentId',
      batchGroup: 'batchGroup',
      customerId: 'customerId',
      fileName: 'fileName',
      fileType: 'fileType',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      remarke: 'remarke',
      serviceApplyId: 'serviceApplyId',
      status: 'status',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appointmentId: 'string',
      batchGroup: 'string',
      customerId: 'string',
      fileName: 'string',
      fileType: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      remarke: 'string',
      serviceApplyId: 'number',
      status: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceApplyResponseBodyDataListPerformanceOrdersTamEngineers extends $dara.Model {
  creatorEmpId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  hrStatus?: string;
  id?: number;
  lastName?: string;
  modifierEmpId?: string;
  name?: string;
  nickNameEn?: string;
  realmId?: number;
  workid?: string;
  static names(): { [key: string]: string } {
    return {
      creatorEmpId: 'creatorEmpId',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      hrStatus: 'hrStatus',
      id: 'id',
      lastName: 'lastName',
      modifierEmpId: 'modifierEmpId',
      name: 'name',
      nickNameEn: 'nickNameEn',
      realmId: 'realmId',
      workid: 'workid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorEmpId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      hrStatus: 'string',
      id: 'number',
      lastName: 'string',
      modifierEmpId: 'string',
      name: 'string',
      nickNameEn: 'string',
      realmId: 'number',
      workid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceApplyResponseBodyDataListPerformanceOrders extends $dara.Model {
  applyFileVOList?: ListServiceApplyResponseBodyDataListPerformanceOrdersApplyFileVOList[];
  appointmentCode?: string;
  appointmentEndTime?: number;
  appointmentId?: string;
  appointmentPassTime?: number;
  appointmentTime?: number;
  commodityDesc?: string;
  creatorEmpId?: string;
  cycleService?: boolean;
  extList?: ListServiceApplyResponseBodyDataListPerformanceOrdersExtList[];
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  mergeSolutionAndReporterOneStep?: boolean;
  modifierEmpId?: string;
  ntmCommodityCode?: string;
  orderDetail?: any;
  orderId?: number;
  packCount?: number;
  packDetails?: { [key: string]: any }[];
  performanceNodeDTOS?: ListServiceApplyResponseBodyDataListPerformanceOrdersPerformanceNodeDTOS[];
  performancePacks?: ListServiceApplyResponseBodyDataListPerformanceOrdersPerformancePacks[];
  purchasePackCode?: number;
  serviceApplyId?: number;
  serviceMonthReports?: ListServiceApplyResponseBodyDataListPerformanceOrdersServiceMonthReports[];
  serviceReports?: ListServiceApplyResponseBodyDataListPerformanceOrdersServiceReports[];
  serviceSchemes?: ListServiceApplyResponseBodyDataListPerformanceOrdersServiceSchemes[];
  status?: number;
  statusStr?: string;
  supportTime?: number[];
  tamEngineers?: ListServiceApplyResponseBodyDataListPerformanceOrdersTamEngineers[];
  static names(): { [key: string]: string } {
    return {
      applyFileVOList: 'applyFileVOList',
      appointmentCode: 'appointmentCode',
      appointmentEndTime: 'appointmentEndTime',
      appointmentId: 'appointmentId',
      appointmentPassTime: 'appointmentPassTime',
      appointmentTime: 'appointmentTime',
      commodityDesc: 'commodityDesc',
      creatorEmpId: 'creatorEmpId',
      cycleService: 'cycleService',
      extList: 'extList',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      mergeSolutionAndReporterOneStep: 'mergeSolutionAndReporterOneStep',
      modifierEmpId: 'modifierEmpId',
      ntmCommodityCode: 'ntmCommodityCode',
      orderDetail: 'orderDetail',
      orderId: 'orderId',
      packCount: 'packCount',
      packDetails: 'packDetails',
      performanceNodeDTOS: 'performanceNodeDTOS',
      performancePacks: 'performancePacks',
      purchasePackCode: 'purchasePackCode',
      serviceApplyId: 'serviceApplyId',
      serviceMonthReports: 'serviceMonthReports',
      serviceReports: 'serviceReports',
      serviceSchemes: 'serviceSchemes',
      status: 'status',
      statusStr: 'statusStr',
      supportTime: 'supportTime',
      tamEngineers: 'tamEngineers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyFileVOList: { 'type': 'array', 'itemType': ListServiceApplyResponseBodyDataListPerformanceOrdersApplyFileVOList },
      appointmentCode: 'string',
      appointmentEndTime: 'number',
      appointmentId: 'string',
      appointmentPassTime: 'number',
      appointmentTime: 'number',
      commodityDesc: 'string',
      creatorEmpId: 'string',
      cycleService: 'boolean',
      extList: { 'type': 'array', 'itemType': ListServiceApplyResponseBodyDataListPerformanceOrdersExtList },
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      mergeSolutionAndReporterOneStep: 'boolean',
      modifierEmpId: 'string',
      ntmCommodityCode: 'string',
      orderDetail: 'any',
      orderId: 'number',
      packCount: 'number',
      packDetails: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      performanceNodeDTOS: { 'type': 'array', 'itemType': ListServiceApplyResponseBodyDataListPerformanceOrdersPerformanceNodeDTOS },
      performancePacks: { 'type': 'array', 'itemType': ListServiceApplyResponseBodyDataListPerformanceOrdersPerformancePacks },
      purchasePackCode: 'number',
      serviceApplyId: 'number',
      serviceMonthReports: { 'type': 'array', 'itemType': ListServiceApplyResponseBodyDataListPerformanceOrdersServiceMonthReports },
      serviceReports: { 'type': 'array', 'itemType': ListServiceApplyResponseBodyDataListPerformanceOrdersServiceReports },
      serviceSchemes: { 'type': 'array', 'itemType': ListServiceApplyResponseBodyDataListPerformanceOrdersServiceSchemes },
      status: 'number',
      statusStr: 'string',
      supportTime: { 'type': 'array', 'itemType': 'number' },
      tamEngineers: { 'type': 'array', 'itemType': ListServiceApplyResponseBodyDataListPerformanceOrdersTamEngineers },
    };
  }

  validate() {
    if(Array.isArray(this.applyFileVOList)) {
      $dara.Model.validateArray(this.applyFileVOList);
    }
    if(Array.isArray(this.extList)) {
      $dara.Model.validateArray(this.extList);
    }
    if(Array.isArray(this.packDetails)) {
      $dara.Model.validateArray(this.packDetails);
    }
    if(Array.isArray(this.performanceNodeDTOS)) {
      $dara.Model.validateArray(this.performanceNodeDTOS);
    }
    if(Array.isArray(this.performancePacks)) {
      $dara.Model.validateArray(this.performancePacks);
    }
    if(Array.isArray(this.serviceMonthReports)) {
      $dara.Model.validateArray(this.serviceMonthReports);
    }
    if(Array.isArray(this.serviceReports)) {
      $dara.Model.validateArray(this.serviceReports);
    }
    if(Array.isArray(this.serviceSchemes)) {
      $dara.Model.validateArray(this.serviceSchemes);
    }
    if(Array.isArray(this.supportTime)) {
      $dara.Model.validateArray(this.supportTime);
    }
    if(Array.isArray(this.tamEngineers)) {
      $dara.Model.validateArray(this.tamEngineers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceApplyResponseBodyDataListPerformancePacksApplyFileVOList extends $dara.Model {
  appointmentId?: string;
  batchGroup?: string;
  customerId?: string;
  fileName?: string;
  fileType?: number;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  remarke?: string;
  serviceApplyId?: number;
  status?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      appointmentId: 'appointmentId',
      batchGroup: 'batchGroup',
      customerId: 'customerId',
      fileName: 'fileName',
      fileType: 'fileType',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      remarke: 'remarke',
      serviceApplyId: 'serviceApplyId',
      status: 'status',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appointmentId: 'string',
      batchGroup: 'string',
      customerId: 'string',
      fileName: 'string',
      fileType: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      remarke: 'string',
      serviceApplyId: 'number',
      status: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceApplyResponseBodyDataListPerformancePacksExtList extends $dara.Model {
  keyCode?: string;
  name?: string;
  value?: any;
  view?: string;
  static names(): { [key: string]: string } {
    return {
      keyCode: 'keyCode',
      name: 'name',
      value: 'value',
      view: 'view',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyCode: 'string',
      name: 'string',
      value: 'any',
      view: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceApplyResponseBodyDataListPerformancePacksPerformanceNodeDTOS extends $dara.Model {
  display?: boolean;
  extendInfo?: any;
  index?: number;
  nodeName?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      display: 'display',
      extendInfo: 'extendInfo',
      index: 'index',
      nodeName: 'nodeName',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      display: 'boolean',
      extendInfo: 'any',
      index: 'number',
      nodeName: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceApplyResponseBodyDataListPerformancePacksServiceMonthReports extends $dara.Model {
  appointmentId?: string;
  batchGroup?: string;
  customerId?: string;
  fileName?: string;
  fileType?: number;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  remarke?: string;
  serviceApplyId?: number;
  status?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      appointmentId: 'appointmentId',
      batchGroup: 'batchGroup',
      customerId: 'customerId',
      fileName: 'fileName',
      fileType: 'fileType',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      remarke: 'remarke',
      serviceApplyId: 'serviceApplyId',
      status: 'status',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appointmentId: 'string',
      batchGroup: 'string',
      customerId: 'string',
      fileName: 'string',
      fileType: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      remarke: 'string',
      serviceApplyId: 'number',
      status: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceApplyResponseBodyDataListPerformancePacksServiceReports extends $dara.Model {
  appointmentId?: string;
  batchGroup?: string;
  customerId?: string;
  fileName?: string;
  fileType?: number;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  remarke?: string;
  serviceApplyId?: number;
  status?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      appointmentId: 'appointmentId',
      batchGroup: 'batchGroup',
      customerId: 'customerId',
      fileName: 'fileName',
      fileType: 'fileType',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      remarke: 'remarke',
      serviceApplyId: 'serviceApplyId',
      status: 'status',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appointmentId: 'string',
      batchGroup: 'string',
      customerId: 'string',
      fileName: 'string',
      fileType: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      remarke: 'string',
      serviceApplyId: 'number',
      status: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceApplyResponseBodyDataListPerformancePacksServiceSchemes extends $dara.Model {
  appointmentId?: string;
  batchGroup?: string;
  customerId?: string;
  fileName?: string;
  fileType?: number;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  remarke?: string;
  serviceApplyId?: number;
  status?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      appointmentId: 'appointmentId',
      batchGroup: 'batchGroup',
      customerId: 'customerId',
      fileName: 'fileName',
      fileType: 'fileType',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      remarke: 'remarke',
      serviceApplyId: 'serviceApplyId',
      status: 'status',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appointmentId: 'string',
      batchGroup: 'string',
      customerId: 'string',
      fileName: 'string',
      fileType: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      remarke: 'string',
      serviceApplyId: 'number',
      status: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceApplyResponseBodyDataListPerformancePacksTamEngineers extends $dara.Model {
  creatorEmpId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  hrStatus?: string;
  id?: number;
  lastName?: string;
  modifierEmpId?: string;
  name?: string;
  nickNameEn?: string;
  realmId?: number;
  workid?: string;
  static names(): { [key: string]: string } {
    return {
      creatorEmpId: 'creatorEmpId',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      hrStatus: 'hrStatus',
      id: 'id',
      lastName: 'lastName',
      modifierEmpId: 'modifierEmpId',
      name: 'name',
      nickNameEn: 'nickNameEn',
      realmId: 'realmId',
      workid: 'workid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorEmpId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      hrStatus: 'string',
      id: 'number',
      lastName: 'string',
      modifierEmpId: 'string',
      name: 'string',
      nickNameEn: 'string',
      realmId: 'number',
      workid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceApplyResponseBodyDataListPerformancePacks extends $dara.Model {
  applyFileVOList?: ListServiceApplyResponseBodyDataListPerformancePacksApplyFileVOList[];
  appointmentCode?: string;
  appointmentEndTime?: number;
  appointmentId?: string;
  appointmentPassTime?: number;
  appointmentTime?: number;
  commodityDesc?: string;
  creatorEmpId?: string;
  cycleService?: boolean;
  extList?: ListServiceApplyResponseBodyDataListPerformancePacksExtList[];
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  mergeSolutionAndReporterOneStep?: boolean;
  modifierEmpId?: string;
  ntmCommodityCode?: string;
  orderDetail?: any;
  orderId?: number;
  performanceNodeDTOS?: ListServiceApplyResponseBodyDataListPerformancePacksPerformanceNodeDTOS[];
  purchasePackCode?: number;
  serviceApplyId?: number;
  serviceMonthReports?: ListServiceApplyResponseBodyDataListPerformancePacksServiceMonthReports[];
  serviceReports?: ListServiceApplyResponseBodyDataListPerformancePacksServiceReports[];
  serviceSchemes?: ListServiceApplyResponseBodyDataListPerformancePacksServiceSchemes[];
  status?: number;
  statusStr?: string;
  supportTime?: number[];
  tamEngineers?: ListServiceApplyResponseBodyDataListPerformancePacksTamEngineers[];
  static names(): { [key: string]: string } {
    return {
      applyFileVOList: 'applyFileVOList',
      appointmentCode: 'appointmentCode',
      appointmentEndTime: 'appointmentEndTime',
      appointmentId: 'appointmentId',
      appointmentPassTime: 'appointmentPassTime',
      appointmentTime: 'appointmentTime',
      commodityDesc: 'commodityDesc',
      creatorEmpId: 'creatorEmpId',
      cycleService: 'cycleService',
      extList: 'extList',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      mergeSolutionAndReporterOneStep: 'mergeSolutionAndReporterOneStep',
      modifierEmpId: 'modifierEmpId',
      ntmCommodityCode: 'ntmCommodityCode',
      orderDetail: 'orderDetail',
      orderId: 'orderId',
      performanceNodeDTOS: 'performanceNodeDTOS',
      purchasePackCode: 'purchasePackCode',
      serviceApplyId: 'serviceApplyId',
      serviceMonthReports: 'serviceMonthReports',
      serviceReports: 'serviceReports',
      serviceSchemes: 'serviceSchemes',
      status: 'status',
      statusStr: 'statusStr',
      supportTime: 'supportTime',
      tamEngineers: 'tamEngineers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyFileVOList: { 'type': 'array', 'itemType': ListServiceApplyResponseBodyDataListPerformancePacksApplyFileVOList },
      appointmentCode: 'string',
      appointmentEndTime: 'number',
      appointmentId: 'string',
      appointmentPassTime: 'number',
      appointmentTime: 'number',
      commodityDesc: 'string',
      creatorEmpId: 'string',
      cycleService: 'boolean',
      extList: { 'type': 'array', 'itemType': ListServiceApplyResponseBodyDataListPerformancePacksExtList },
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      mergeSolutionAndReporterOneStep: 'boolean',
      modifierEmpId: 'string',
      ntmCommodityCode: 'string',
      orderDetail: 'any',
      orderId: 'number',
      performanceNodeDTOS: { 'type': 'array', 'itemType': ListServiceApplyResponseBodyDataListPerformancePacksPerformanceNodeDTOS },
      purchasePackCode: 'number',
      serviceApplyId: 'number',
      serviceMonthReports: { 'type': 'array', 'itemType': ListServiceApplyResponseBodyDataListPerformancePacksServiceMonthReports },
      serviceReports: { 'type': 'array', 'itemType': ListServiceApplyResponseBodyDataListPerformancePacksServiceReports },
      serviceSchemes: { 'type': 'array', 'itemType': ListServiceApplyResponseBodyDataListPerformancePacksServiceSchemes },
      status: 'number',
      statusStr: 'string',
      supportTime: { 'type': 'array', 'itemType': 'number' },
      tamEngineers: { 'type': 'array', 'itemType': ListServiceApplyResponseBodyDataListPerformancePacksTamEngineers },
    };
  }

  validate() {
    if(Array.isArray(this.applyFileVOList)) {
      $dara.Model.validateArray(this.applyFileVOList);
    }
    if(Array.isArray(this.extList)) {
      $dara.Model.validateArray(this.extList);
    }
    if(Array.isArray(this.performanceNodeDTOS)) {
      $dara.Model.validateArray(this.performanceNodeDTOS);
    }
    if(Array.isArray(this.serviceMonthReports)) {
      $dara.Model.validateArray(this.serviceMonthReports);
    }
    if(Array.isArray(this.serviceReports)) {
      $dara.Model.validateArray(this.serviceReports);
    }
    if(Array.isArray(this.serviceSchemes)) {
      $dara.Model.validateArray(this.serviceSchemes);
    }
    if(Array.isArray(this.supportTime)) {
      $dara.Model.validateArray(this.supportTime);
    }
    if(Array.isArray(this.tamEngineers)) {
      $dara.Model.validateArray(this.tamEngineers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceApplyResponseBodyDataListServiceReports extends $dara.Model {
  appointmentId?: string;
  batchGroup?: string;
  customerId?: string;
  fileName?: string;
  fileType?: number;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  remarke?: string;
  serviceApplyId?: number;
  status?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      appointmentId: 'appointmentId',
      batchGroup: 'batchGroup',
      customerId: 'customerId',
      fileName: 'fileName',
      fileType: 'fileType',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      remarke: 'remarke',
      serviceApplyId: 'serviceApplyId',
      status: 'status',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appointmentId: 'string',
      batchGroup: 'string',
      customerId: 'string',
      fileName: 'string',
      fileType: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      remarke: 'string',
      serviceApplyId: 'number',
      status: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceApplyResponseBodyDataList extends $dara.Model {
  applierId?: string;
  applyCode?: string;
  applyComponentDetails?: string[][];
  applyTime?: number;
  appointments?: ListServiceApplyResponseBodyDataListAppointments[];
  buyUrl?: string;
  creatorEmpId?: string;
  customerName?: string;
  cycleService?: boolean;
  executedCount?: number;
  finishCount?: number;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  isOneToOneExpertServiceByTime?: boolean;
  mergeSolutionAndReporterOneStep?: boolean;
  modifierEmpId?: string;
  packDetails?: { [key: string]: any }[];
  payOrders?: ListServiceApplyResponseBodyDataListPayOrders[];
  payUrl?: string;
  performanceOrders?: ListServiceApplyResponseBodyDataListPerformanceOrders[];
  performancePacks?: ListServiceApplyResponseBodyDataListPerformancePacks[];
  reneWalUrl?: string;
  serviceCode?: string;
  serviceName?: string;
  serviceReports?: ListServiceApplyResponseBodyDataListServiceReports[];
  serviceTimeRange?: number[];
  status?: string;
  statusCode?: number;
  statusStr?: string;
  termOfValidity?: string;
  totalPack?: number;
  type?: string;
  usePack?: number;
  userRights?: string;
  static names(): { [key: string]: string } {
    return {
      applierId: 'applierId',
      applyCode: 'applyCode',
      applyComponentDetails: 'applyComponentDetails',
      applyTime: 'applyTime',
      appointments: 'appointments',
      buyUrl: 'buyUrl',
      creatorEmpId: 'creatorEmpId',
      customerName: 'customerName',
      cycleService: 'cycleService',
      executedCount: 'executedCount',
      finishCount: 'finishCount',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      isOneToOneExpertServiceByTime: 'isOneToOneExpertServiceByTime',
      mergeSolutionAndReporterOneStep: 'mergeSolutionAndReporterOneStep',
      modifierEmpId: 'modifierEmpId',
      packDetails: 'packDetails',
      payOrders: 'payOrders',
      payUrl: 'payUrl',
      performanceOrders: 'performanceOrders',
      performancePacks: 'performancePacks',
      reneWalUrl: 'reneWalUrl',
      serviceCode: 'serviceCode',
      serviceName: 'serviceName',
      serviceReports: 'serviceReports',
      serviceTimeRange: 'serviceTimeRange',
      status: 'status',
      statusCode: 'statusCode',
      statusStr: 'statusStr',
      termOfValidity: 'termOfValidity',
      totalPack: 'totalPack',
      type: 'type',
      usePack: 'usePack',
      userRights: 'userRights',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applierId: 'string',
      applyCode: 'string',
      applyComponentDetails: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
      applyTime: 'number',
      appointments: { 'type': 'array', 'itemType': ListServiceApplyResponseBodyDataListAppointments },
      buyUrl: 'string',
      creatorEmpId: 'string',
      customerName: 'string',
      cycleService: 'boolean',
      executedCount: 'number',
      finishCount: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      isOneToOneExpertServiceByTime: 'boolean',
      mergeSolutionAndReporterOneStep: 'boolean',
      modifierEmpId: 'string',
      packDetails: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      payOrders: { 'type': 'array', 'itemType': ListServiceApplyResponseBodyDataListPayOrders },
      payUrl: 'string',
      performanceOrders: { 'type': 'array', 'itemType': ListServiceApplyResponseBodyDataListPerformanceOrders },
      performancePacks: { 'type': 'array', 'itemType': ListServiceApplyResponseBodyDataListPerformancePacks },
      reneWalUrl: 'string',
      serviceCode: 'string',
      serviceName: 'string',
      serviceReports: { 'type': 'array', 'itemType': ListServiceApplyResponseBodyDataListServiceReports },
      serviceTimeRange: { 'type': 'array', 'itemType': 'number' },
      status: 'string',
      statusCode: 'number',
      statusStr: 'string',
      termOfValidity: 'string',
      totalPack: 'number',
      type: 'string',
      usePack: 'number',
      userRights: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applyComponentDetails)) {
      $dara.Model.validateArray(this.applyComponentDetails);
    }
    if(Array.isArray(this.appointments)) {
      $dara.Model.validateArray(this.appointments);
    }
    if(Array.isArray(this.packDetails)) {
      $dara.Model.validateArray(this.packDetails);
    }
    if(Array.isArray(this.payOrders)) {
      $dara.Model.validateArray(this.payOrders);
    }
    if(Array.isArray(this.performanceOrders)) {
      $dara.Model.validateArray(this.performanceOrders);
    }
    if(Array.isArray(this.performancePacks)) {
      $dara.Model.validateArray(this.performancePacks);
    }
    if(Array.isArray(this.serviceReports)) {
      $dara.Model.validateArray(this.serviceReports);
    }
    if(Array.isArray(this.serviceTimeRange)) {
      $dara.Model.validateArray(this.serviceTimeRange);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceApplyResponseBodyData extends $dara.Model {
  extend?: any;
  list?: ListServiceApplyResponseBodyDataList[];
  pageNum?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      extend: 'extend',
      list: 'list',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extend: 'any',
      list: { 'type': 'array', 'itemType': ListServiceApplyResponseBodyDataList },
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceApplyResponseBody extends $dara.Model {
  code?: string;
  data?: ListServiceApplyResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListServiceApplyResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

