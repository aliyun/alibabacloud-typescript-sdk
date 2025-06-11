// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeProjectComponentsResponseBodyDataFullImportComponents } from "./DescribeProjectComponentsResponseBodyDataFullImportComponents";
import { DescribeProjectComponentsResponseBodyDataFullVerifyComponents } from "./DescribeProjectComponentsResponseBodyDataFullVerifyComponents";
import { DescribeProjectComponentsResponseBodyDataIncrSyncComponents } from "./DescribeProjectComponentsResponseBodyDataIncrSyncComponents";
import { DescribeProjectComponentsResponseBodyDataReverseIncrSyncComponents } from "./DescribeProjectComponentsResponseBodyDataReverseIncrSyncComponents";
import { DescribeProjectComponentsResponseBodyDataReverseStoreList } from "./DescribeProjectComponentsResponseBodyDataReverseStoreList";
import { DescribeProjectComponentsResponseBodyDataStoreList } from "./DescribeProjectComponentsResponseBodyDataStoreList";


export class DescribeProjectComponentsResponseBodyData extends $dara.Model {
  fullImportComponents?: DescribeProjectComponentsResponseBodyDataFullImportComponents[];
  fullVerifyComponents?: DescribeProjectComponentsResponseBodyDataFullVerifyComponents[];
  incrSyncComponents?: DescribeProjectComponentsResponseBodyDataIncrSyncComponents[];
  reverseIncrSyncComponents?: DescribeProjectComponentsResponseBodyDataReverseIncrSyncComponents[];
  reverseStoreList?: DescribeProjectComponentsResponseBodyDataReverseStoreList[];
  storeList?: DescribeProjectComponentsResponseBodyDataStoreList[];
  static names(): { [key: string]: string } {
    return {
      fullImportComponents: 'FullImportComponents',
      fullVerifyComponents: 'FullVerifyComponents',
      incrSyncComponents: 'IncrSyncComponents',
      reverseIncrSyncComponents: 'ReverseIncrSyncComponents',
      reverseStoreList: 'ReverseStoreList',
      storeList: 'StoreList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullImportComponents: { 'type': 'array', 'itemType': DescribeProjectComponentsResponseBodyDataFullImportComponents },
      fullVerifyComponents: { 'type': 'array', 'itemType': DescribeProjectComponentsResponseBodyDataFullVerifyComponents },
      incrSyncComponents: { 'type': 'array', 'itemType': DescribeProjectComponentsResponseBodyDataIncrSyncComponents },
      reverseIncrSyncComponents: { 'type': 'array', 'itemType': DescribeProjectComponentsResponseBodyDataReverseIncrSyncComponents },
      reverseStoreList: { 'type': 'array', 'itemType': DescribeProjectComponentsResponseBodyDataReverseStoreList },
      storeList: { 'type': 'array', 'itemType': DescribeProjectComponentsResponseBodyDataStoreList },
    };
  }

  validate() {
    if(Array.isArray(this.fullImportComponents)) {
      $dara.Model.validateArray(this.fullImportComponents);
    }
    if(Array.isArray(this.fullVerifyComponents)) {
      $dara.Model.validateArray(this.fullVerifyComponents);
    }
    if(Array.isArray(this.incrSyncComponents)) {
      $dara.Model.validateArray(this.incrSyncComponents);
    }
    if(Array.isArray(this.reverseIncrSyncComponents)) {
      $dara.Model.validateArray(this.reverseIncrSyncComponents);
    }
    if(Array.isArray(this.reverseStoreList)) {
      $dara.Model.validateArray(this.reverseStoreList);
    }
    if(Array.isArray(this.storeList)) {
      $dara.Model.validateArray(this.storeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

