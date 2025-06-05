// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPropertiesResponseBodyDataConsoleConfig } from "./GetPropertiesResponseBodyDataConsoleConfig";
import { GetPropertiesResponseBodyDataIntelligentSearchConfig } from "./GetPropertiesResponseBodyDataIntelligentSearchConfig";
import { GetPropertiesResponseBodyDataMiaosouConfig } from "./GetPropertiesResponseBodyDataMiaosouConfig";
import { GetPropertiesResponseBodyDataSearchSourceList } from "./GetPropertiesResponseBodyDataSearchSourceList";
import { GetPropertiesResponseBodyDataSearchSources } from "./GetPropertiesResponseBodyDataSearchSources";
import { GetPropertiesResponseBodyDataUserInfo } from "./GetPropertiesResponseBodyDataUserInfo";
import { GetPropertiesResponseBodyDataWanxiangImageSizeConfig } from "./GetPropertiesResponseBodyDataWanxiangImageSizeConfig";
import { GetPropertiesResponseBodyDataWanxiangImageStyleConfig } from "./GetPropertiesResponseBodyDataWanxiangImageStyleConfig";


export class GetPropertiesResponseBodyData extends $dara.Model {
  chatConfig?: { [key: string]: any };
  consoleConfig?: GetPropertiesResponseBodyDataConsoleConfig;
  generalConfigMap?: { [key: string]: any };
  intelligentSearchConfig?: GetPropertiesResponseBodyDataIntelligentSearchConfig;
  miaosouConfig?: GetPropertiesResponseBodyDataMiaosouConfig;
  searchSourceList?: GetPropertiesResponseBodyDataSearchSourceList[];
  searchSources?: GetPropertiesResponseBodyDataSearchSources[];
  /**
   * @example
   * true
   */
  slrAuthorized?: boolean;
  userInfo?: GetPropertiesResponseBodyDataUserInfo;
  wanxiangImageSizeConfig?: GetPropertiesResponseBodyDataWanxiangImageSizeConfig[];
  wanxiangImageStyleConfig?: GetPropertiesResponseBodyDataWanxiangImageStyleConfig[];
  static names(): { [key: string]: string } {
    return {
      chatConfig: 'ChatConfig',
      consoleConfig: 'ConsoleConfig',
      generalConfigMap: 'GeneralConfigMap',
      intelligentSearchConfig: 'IntelligentSearchConfig',
      miaosouConfig: 'MiaosouConfig',
      searchSourceList: 'SearchSourceList',
      searchSources: 'SearchSources',
      slrAuthorized: 'SlrAuthorized',
      userInfo: 'UserInfo',
      wanxiangImageSizeConfig: 'WanxiangImageSizeConfig',
      wanxiangImageStyleConfig: 'WanxiangImageStyleConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      consoleConfig: GetPropertiesResponseBodyDataConsoleConfig,
      generalConfigMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      intelligentSearchConfig: GetPropertiesResponseBodyDataIntelligentSearchConfig,
      miaosouConfig: GetPropertiesResponseBodyDataMiaosouConfig,
      searchSourceList: { 'type': 'array', 'itemType': GetPropertiesResponseBodyDataSearchSourceList },
      searchSources: { 'type': 'array', 'itemType': GetPropertiesResponseBodyDataSearchSources },
      slrAuthorized: 'boolean',
      userInfo: GetPropertiesResponseBodyDataUserInfo,
      wanxiangImageSizeConfig: { 'type': 'array', 'itemType': GetPropertiesResponseBodyDataWanxiangImageSizeConfig },
      wanxiangImageStyleConfig: { 'type': 'array', 'itemType': GetPropertiesResponseBodyDataWanxiangImageStyleConfig },
    };
  }

  validate() {
    if(this.chatConfig) {
      $dara.Model.validateMap(this.chatConfig);
    }
    if(this.consoleConfig && typeof (this.consoleConfig as any).validate === 'function') {
      (this.consoleConfig as any).validate();
    }
    if(this.generalConfigMap) {
      $dara.Model.validateMap(this.generalConfigMap);
    }
    if(this.intelligentSearchConfig && typeof (this.intelligentSearchConfig as any).validate === 'function') {
      (this.intelligentSearchConfig as any).validate();
    }
    if(this.miaosouConfig && typeof (this.miaosouConfig as any).validate === 'function') {
      (this.miaosouConfig as any).validate();
    }
    if(Array.isArray(this.searchSourceList)) {
      $dara.Model.validateArray(this.searchSourceList);
    }
    if(Array.isArray(this.searchSources)) {
      $dara.Model.validateArray(this.searchSources);
    }
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    if(Array.isArray(this.wanxiangImageSizeConfig)) {
      $dara.Model.validateArray(this.wanxiangImageSizeConfig);
    }
    if(Array.isArray(this.wanxiangImageStyleConfig)) {
      $dara.Model.validateArray(this.wanxiangImageStyleConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

