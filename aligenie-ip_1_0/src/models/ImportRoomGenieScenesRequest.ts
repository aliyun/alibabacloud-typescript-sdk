// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportRoomGenieScenesRequestSceneListActionsAttributeValues extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * powerstate
   */
  attributeName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  attributeValue?: string;
  static names(): { [key: string]: string } {
    return {
      attributeName: 'AttributeName',
      attributeValue: 'AttributeValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeName: 'string',
      attributeValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomGenieScenesRequestSceneListActionsDevice extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * light
   */
  category?: string;
  /**
   * @example
   * 0
   */
  deviceIndex?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3c5d2ab8f9ec
   */
  deviceNumber?: string;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      deviceIndex: 'DeviceIndex',
      deviceNumber: 'DeviceNumber',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      deviceIndex: 'number',
      deviceNumber: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomGenieScenesRequestSceneListActions extends $dara.Model {
  attributeValues?: ImportRoomGenieScenesRequestSceneListActionsAttributeValues[];
  device?: ImportRoomGenieScenesRequestSceneListActionsDevice;
  reply?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      attributeValues: 'AttributeValues',
      device: 'Device',
      reply: 'Reply',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeValues: { 'type': 'array', 'itemType': ImportRoomGenieScenesRequestSceneListActionsAttributeValues },
      device: ImportRoomGenieScenesRequestSceneListActionsDevice,
      reply: 'string',
      type: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.attributeValues)) {
      $dara.Model.validateArray(this.attributeValues);
    }
    if(this.device && typeof (this.device as any).validate === 'function') {
      (this.device as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomGenieScenesRequestSceneListTriggersAttributeValues extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  attributeName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  attributeValue?: string;
  static names(): { [key: string]: string } {
    return {
      attributeName: 'AttributeName',
      attributeValue: 'AttributeValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeName: 'string',
      attributeValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomGenieScenesRequestSceneListTriggersDevice extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  category?: string;
  deviceIndex?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  deviceNumber?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      deviceIndex: 'DeviceIndex',
      deviceNumber: 'DeviceNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      deviceIndex: 'string',
      deviceNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomGenieScenesRequestSceneListTriggers extends $dara.Model {
  attributeValues?: ImportRoomGenieScenesRequestSceneListTriggersAttributeValues[];
  corpusList?: string[];
  device?: ImportRoomGenieScenesRequestSceneListTriggersDevice;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      attributeValues: 'AttributeValues',
      corpusList: 'CorpusList',
      device: 'Device',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeValues: { 'type': 'array', 'itemType': ImportRoomGenieScenesRequestSceneListTriggersAttributeValues },
      corpusList: { 'type': 'array', 'itemType': 'string' },
      device: ImportRoomGenieScenesRequestSceneListTriggersDevice,
      type: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.attributeValues)) {
      $dara.Model.validateArray(this.attributeValues);
    }
    if(Array.isArray(this.corpusList)) {
      $dara.Model.validateArray(this.corpusList);
    }
    if(this.device && typeof (this.device as any).validate === 'function') {
      (this.device as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomGenieScenesRequestSceneList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  actions?: ImportRoomGenieScenesRequestSceneListActions[];
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  display?: boolean;
  /**
   * @example
   * http://xxx.com/yyy.png
   */
  icon?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sceneName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  triggerLogical?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  triggers?: ImportRoomGenieScenesRequestSceneListTriggers[];
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      description: 'Description',
      display: 'Display',
      icon: 'Icon',
      sceneName: 'SceneName',
      triggerLogical: 'TriggerLogical',
      triggers: 'Triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': ImportRoomGenieScenesRequestSceneListActions },
      description: 'string',
      display: 'boolean',
      icon: 'string',
      sceneName: 'string',
      triggerLogical: 'number',
      triggers: { 'type': 'array', 'itemType': ImportRoomGenieScenesRequestSceneListTriggers },
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    if(Array.isArray(this.triggers)) {
      $dara.Model.validateArray(this.triggers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportRoomGenieScenesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7a3***013
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1211
   */
  roomNo?: string;
  sceneList?: ImportRoomGenieScenesRequestSceneList[];
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      roomNo: 'RoomNo',
      sceneList: 'SceneList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      roomNo: 'string',
      sceneList: { 'type': 'array', 'itemType': ImportRoomGenieScenesRequestSceneList },
    };
  }

  validate() {
    if(Array.isArray(this.sceneList)) {
      $dara.Model.validateArray(this.sceneList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

