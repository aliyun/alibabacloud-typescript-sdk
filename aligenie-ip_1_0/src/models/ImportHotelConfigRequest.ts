// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportHotelConfigRequestImportHotelConfigRcuCustomScenes extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  corpusList?: string[];
  description?: string;
  icon?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sceneId?: string;
  static names(): { [key: string]: string } {
    return {
      corpusList: 'CorpusList',
      description: 'Description',
      icon: 'Icon',
      name: 'Name',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpusList: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      icon: 'string',
      name: 'string',
      sceneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.corpusList)) {
      $dara.Model.validateArray(this.corpusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportHotelConfigRequestImportHotelConfig extends $dara.Model {
  rcuCustomScenes?: ImportHotelConfigRequestImportHotelConfigRcuCustomScenes[];
  static names(): { [key: string]: string } {
    return {
      rcuCustomScenes: 'RcuCustomScenes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rcuCustomScenes: { 'type': 'array', 'itemType': ImportHotelConfigRequestImportHotelConfigRcuCustomScenes },
    };
  }

  validate() {
    if(Array.isArray(this.rcuCustomScenes)) {
      $dara.Model.validateArray(this.rcuCustomScenes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportHotelConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7***83
   */
  hotelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  importHotelConfig?: ImportHotelConfigRequestImportHotelConfig;
  static names(): { [key: string]: string } {
    return {
      hotelId: 'HotelId',
      importHotelConfig: 'ImportHotelConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotelId: 'string',
      importHotelConfig: ImportHotelConfigRequestImportHotelConfig,
    };
  }

  validate() {
    if(this.importHotelConfig && typeof (this.importHotelConfig as any).validate === 'function') {
      (this.importHotelConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

