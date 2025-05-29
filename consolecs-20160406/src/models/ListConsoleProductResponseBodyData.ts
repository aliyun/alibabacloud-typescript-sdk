// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ListConsoleProductResponseBodyData extends $dara.Model {
  belongedCategory?: string;
  categories?: string[];
  channelLinks?: string[];
  docId?: string;
  keywords?: string[];
  names?: string;
  pinyin?: string;
  productId?: string;
  relatedConsoleAppId?: string;
  relatedPipId?: string;
  showInNav?: boolean;
  supportedAccounts?: string[];
  supportedChannels?: string[];
  tag?: string;
  tagExpireTime?: string;
  static names(): { [key: string]: string } {
    return {
      belongedCategory: 'BelongedCategory',
      categories: 'Categories',
      channelLinks: 'ChannelLinks',
      docId: 'DocId',
      keywords: 'Keywords',
      names: 'Names',
      pinyin: 'Pinyin',
      productId: 'ProductId',
      relatedConsoleAppId: 'RelatedConsoleAppId',
      relatedPipId: 'RelatedPipId',
      showInNav: 'ShowInNav',
      supportedAccounts: 'SupportedAccounts',
      supportedChannels: 'SupportedChannels',
      tag: 'Tag',
      tagExpireTime: 'TagExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      belongedCategory: 'string',
      categories: { 'type': 'array', 'itemType': 'string' },
      channelLinks: { 'type': 'array', 'itemType': 'string' },
      docId: 'string',
      keywords: { 'type': 'array', 'itemType': 'string' },
      names: 'string',
      pinyin: 'string',
      productId: 'string',
      relatedConsoleAppId: 'string',
      relatedPipId: 'string',
      showInNav: 'boolean',
      supportedAccounts: { 'type': 'array', 'itemType': 'string' },
      supportedChannels: { 'type': 'array', 'itemType': 'string' },
      tag: 'string',
      tagExpireTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    if(Array.isArray(this.channelLinks)) {
      $dara.Model.validateArray(this.channelLinks);
    }
    if(Array.isArray(this.keywords)) {
      $dara.Model.validateArray(this.keywords);
    }
    if(Array.isArray(this.supportedAccounts)) {
      $dara.Model.validateArray(this.supportedAccounts);
    }
    if(Array.isArray(this.supportedChannels)) {
      $dara.Model.validateArray(this.supportedChannels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

