// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConsoleMessagesResponseBodyMessageListContentConfigs extends $dara.Model {
  /**
   * @remarks
   * The color of the body text. The color value saved when the message is created or modified is used.
   * 
   * @example
   * #666666
   */
  color?: string;
  /**
   * @remarks
   * The message body text in the specified language.
   * 
   * @example
   * The cloud computer will undergo routine maintenance. Please save your work in advance
   */
  contentText?: string;
  /**
   * @remarks
   * The body language. Valid values: CN (Chinese), EN (English), and JP (Japanese). The query returns the language value saved when the message is created or modified, retaining the original case.
   * 
   * @example
   * CN
   */
  langType?: string;
  static names(): { [key: string]: string } {
    return {
      color: 'Color',
      contentText: 'ContentText',
      langType: 'LangType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      color: 'string',
      contentText: 'string',
      langType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConsoleMessagesResponseBodyMessageListHyperLinkConfigs extends $dara.Model {
  /**
   * @remarks
   * The text displayed on the hyperlink button.
   * 
   * @example
   * View Details
   */
  title?: string;
  /**
   * @remarks
   * The URL accessed after the hyperlink button is clicked.
   * 
   * @example
   * https://example.com/announcements/maintenance
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
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

export class DescribeConsoleMessagesResponseBodyMessageListImageInfoList extends $dara.Model {
  /**
   * @remarks
   * The name of the image file.
   * 
   * @example
   * img0.jpg
   */
  fileName?: string;
  /**
   * @remarks
   * The storage path of the image file.
   * 
   * @example
   * image_file/CUSTOM_WALLPAPER/00000000-0000-img0.jpg
   */
  imageFilePath?: string;
  /**
   * @remarks
   * The image type. Configuration types defined by the backend include Operational (operational message image), WallpaperBasic (basic wallpaper image), and WallpaperAppend (appended wallpaper image). The query returns the image type value saved when the message is created or modified, retaining the original case.
   * 
   * @example
   * WallpaperBasic
   */
  imageType?: string;
  /**
   * @remarks
   * The temporary download URL of the image file. The link has a limited validity period. If the link expires, you can query again to obtain a new one.
   * 
   * @example
   * https://example.com/images/img0.jpg
   */
  imageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      imageFilePath: 'ImageFilePath',
      imageType: 'ImageType',
      imageUrl: 'ImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      imageFilePath: 'string',
      imageType: 'string',
      imageUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConsoleMessagesResponseBodyMessageListMetaData extends $dara.Model {
  /**
   * @remarks
   * The AD domain name associated with the message configuration.
   * 
   * @example
   * ad.example.com
   */
  adDomain?: string;
  /**
   * @remarks
   * The workspace ID associated with the message configuration.
   * 
   * @example
   * cn-shanghai+dir-example01
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The list of scheduled sending configurations. If TimerType is CRON, the elements are cron expressions. If TimerType is Timestamp, the elements are millisecond timestamps represented as strings.
   */
  timer?: string[];
  /**
   * @remarks
   * The scheduled sending type. Valid values: CRON (cron expression) and Timestamp (timestamp). The configuration values are case-sensitive.
   * 
   * @example
   * CRON
   */
  timerType?: string;
  static names(): { [key: string]: string } {
    return {
      adDomain: 'AdDomain',
      officeSiteId: 'OfficeSiteId',
      timer: 'Timer',
      timerType: 'TimerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adDomain: 'string',
      officeSiteId: 'string',
      timer: { 'type': 'array', 'itemType': 'string' },
      timerType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.timer)) {
      $dara.Model.validateArray(this.timer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConsoleMessagesResponseBodyMessageListTitleConfigs extends $dara.Model {
  /**
   * @remarks
   * The color of the title text. The color value saved when the message is created or modified is used.
   * 
   * @example
   * #333333
   */
  color?: string;
  /**
   * @remarks
   * The title language. Valid values: CN (Chinese), EN (English), and JP (Japanese). The query returns the language value saved when the message is created or modified, retaining the original case.
   * 
   * @example
   * CN
   */
  langType?: string;
  /**
   * @remarks
   * The message title text in the specified language.
   * 
   * @example
   * System Maintenance Notice
   */
  titleText?: string;
  static names(): { [key: string]: string } {
    return {
      color: 'Color',
      langType: 'LangType',
      titleText: 'TitleText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      color: 'string',
      langType: 'string',
      titleText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConsoleMessagesResponseBodyMessageList extends $dara.Model {
  /**
   * @remarks
   * The list of client types to which the message applies. Standard names are returned: Windows, Mac, Web, and Hardware.
   */
  clientTypes?: string[];
  /**
   * @remarks
   * The list of message body configurations for each language.
   */
  contentConfigs?: DescribeConsoleMessagesResponseBodyMessageListContentConfigs[];
  /**
   * @remarks
   * The time when the operational message stops taking effect. The time is in ISO 8601 format. A time zone offset of +00:00 indicates UTC time.
   * 
   * @example
   * 2026-10-11T02:00:00.000+00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The time when the message was created.
   * 
   * @example
   * 2026-10-10T00:00:00.000+00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the message was last modified. This time is also updated when the message status changes.
   * 
   * @example
   * 2026-10-10T01:00:00.000+00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The list of hyperlink button configurations in the message.
   */
  hyperLinkConfigs?: DescribeConsoleMessagesResponseBodyMessageListHyperLinkConfigs[];
  /**
   * @remarks
   * The storage path of the image file for the operational message.
   * 
   * @example
   * image_file/OPERATIONAL/00000000-0000-console-message.png
   */
  imageFilePath?: string;
  /**
   * @remarks
   * The list of image configurations, which is mainly used for custom wallpaper messages. Each item includes the image name, image type, storage path, and temporary download URL.
   */
  imageInfoList?: DescribeConsoleMessagesResponseBodyMessageListImageInfoList[];
  /**
   * @remarks
   * The temporary download URL of the operational message image. The link has a limited validity period. If the link expires, you can query again to obtain a new one.
   * 
   * @example
   * https://example.com/images/console-message.png
   */
  imageUrl?: string;
  /**
   * @remarks
   * The message ID, which can be used to send, modify, or delete a specified message.
   * 
   * @example
   * msg-123456
   */
  messageId?: string;
  /**
   * @remarks
   * The message level of the notification message. Valid values: STRONG (strong message) and WEAK (weak message).
   * 
   * @example
   * STRONG
   */
  messageLevel?: string;
  /**
   * @remarks
   * The message type. Valid values: OPERATIONAL (client operational message), WALLPAPER (desktop wallpaper text message), NOTIFICATION (message center notification), and CUSTOM_WALLPAPER (custom desktop wallpaper).
   * 
   * @example
   * NOTIFICATION
   */
  messageType?: string;
  /**
   * @remarks
   * The additional configuration of the message, including the associated workspace, AD domain name, and scheduled sending configuration. Whether specific fields are returned depends on the message type and its saved configuration.
   */
  metaData?: DescribeConsoleMessagesResponseBodyMessageListMetaData;
  /**
   * @remarks
   * The display position of the message. For wallpaper text messages, valid values are CENTER (center), TOP_RIGHT (top right), BOTTOM_RIGHT (bottom right), and BOTTOM_LEFT (bottom left). For client operational messages, valid values are CLIENT_ENTERPRISE_RESOURCE_PAGE (Enterprise Edition client cloud resource page) and CLIENT_BUSINESS_RESOURCE_PAGE (Business Edition client cloud resource page).
   * 
   * @example
   * CENTER
   */
  position?: string;
  /**
   * @remarks
   * The time when the operational message starts taking effect. The time is in ISO 8601 format. A time zone offset of +00:00 indicates UTC time.
   * 
   * @example
   * 2026-10-10T02:00:00.000+00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The current status of the message. Valid values: Init (initializing), Pushing (pushing), Published (published), Expired (expired), Deleting (deleting), and Failed (failed). Published indicates that the message has been published or the server-side push processing has finished, but it does not indicate that all target terminals have successfully received the message.
   * 
   * @example
   * Published
   */
  status?: string;
  /**
   * @remarks
   * The JSON string of the list of targets to which the message applies. For Organization and AdOrg, it is an array of objects containing orgId (organization ID) and orgName (organization name). The organization name may be empty, and records in the old format may not contain orgName. For Tag, it is an array of objects containing tagKey (tag key), tagValue (tag value), and regionId (region ID). For other target types, it is an array of strings. The all-users target is represented by ALL_USERS.
   * 
   * @example
   * ["user01"]
   */
  targetIds?: string;
  /**
   * @remarks
   * The type of the target to which the message applies. Valid values: AllUsers (all convenience users), EndUser (specified convenience user), Organization (specified convenience user organization), Desktop (cloud computer), ResourceGroup (resource group), Region (region), Tag (tag), AdAllUsers (all AD users), AdUser (specified AD user), and AdOrg (specified AD organization).
   * 
   * @example
   * EndUser
   */
  targetType?: string;
  /**
   * @remarks
   * The list of message title configurations for each language.
   */
  titleConfigs?: DescribeConsoleMessagesResponseBodyMessageListTitleConfigs[];
  static names(): { [key: string]: string } {
    return {
      clientTypes: 'ClientTypes',
      contentConfigs: 'ContentConfigs',
      endTime: 'EndTime',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      hyperLinkConfigs: 'HyperLinkConfigs',
      imageFilePath: 'ImageFilePath',
      imageInfoList: 'ImageInfoList',
      imageUrl: 'ImageUrl',
      messageId: 'MessageId',
      messageLevel: 'MessageLevel',
      messageType: 'MessageType',
      metaData: 'MetaData',
      position: 'Position',
      startTime: 'StartTime',
      status: 'Status',
      targetIds: 'TargetIds',
      targetType: 'TargetType',
      titleConfigs: 'TitleConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientTypes: { 'type': 'array', 'itemType': 'string' },
      contentConfigs: { 'type': 'array', 'itemType': DescribeConsoleMessagesResponseBodyMessageListContentConfigs },
      endTime: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      hyperLinkConfigs: { 'type': 'array', 'itemType': DescribeConsoleMessagesResponseBodyMessageListHyperLinkConfigs },
      imageFilePath: 'string',
      imageInfoList: { 'type': 'array', 'itemType': DescribeConsoleMessagesResponseBodyMessageListImageInfoList },
      imageUrl: 'string',
      messageId: 'string',
      messageLevel: 'string',
      messageType: 'string',
      metaData: DescribeConsoleMessagesResponseBodyMessageListMetaData,
      position: 'string',
      startTime: 'string',
      status: 'string',
      targetIds: 'string',
      targetType: 'string',
      titleConfigs: { 'type': 'array', 'itemType': DescribeConsoleMessagesResponseBodyMessageListTitleConfigs },
    };
  }

  validate() {
    if(Array.isArray(this.clientTypes)) {
      $dara.Model.validateArray(this.clientTypes);
    }
    if(Array.isArray(this.contentConfigs)) {
      $dara.Model.validateArray(this.contentConfigs);
    }
    if(Array.isArray(this.hyperLinkConfigs)) {
      $dara.Model.validateArray(this.hyperLinkConfigs);
    }
    if(Array.isArray(this.imageInfoList)) {
      $dara.Model.validateArray(this.imageInfoList);
    }
    if(this.metaData && typeof (this.metaData as any).validate === 'function') {
      (this.metaData as any).validate();
    }
    if(Array.isArray(this.titleConfigs)) {
      $dara.Model.validateArray(this.titleConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConsoleMessagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of console messages queried for the current page. If no messages match, an empty list is returned.
   */
  messageList?: DescribeConsoleMessagesResponseBodyMessageList[];
  /**
   * @remarks
   * The ID of the current request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 9F1D7E42-06A8-4B50-9A21-6E0C8D3F5B72
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of messages that match the query conditions, not the number of messages returned on the current page.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      messageList: 'MessageList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageList: { 'type': 'array', 'itemType': DescribeConsoleMessagesResponseBodyMessageList },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.messageList)) {
      $dara.Model.validateArray(this.messageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

