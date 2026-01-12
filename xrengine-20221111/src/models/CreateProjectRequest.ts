// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectRequestTryOnParamsClothInfos extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  id?: number;
  size?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      size: 'Size',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      size: 'string',
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

export class CreateProjectRequestTryOnParams extends $dara.Model {
  clothIds?: number[];
  clothInfos?: CreateProjectRequestTryOnParamsClothInfos[];
  static names(): { [key: string]: string } {
    return {
      clothIds: 'ClothIds',
      clothInfos: 'ClothInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clothIds: { 'type': 'array', 'itemType': 'number' },
      clothInfos: { 'type': 'array', 'itemType': CreateProjectRequestTryOnParamsClothInfos },
    };
  }

  validate() {
    if(Array.isArray(this.clothIds)) {
      $dara.Model.validateArray(this.clothIds);
    }
    if(Array.isArray(this.clothInfos)) {
      $dara.Model.validateArray(this.clothInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequest extends $dara.Model {
  autoBuild?: boolean;
  dependencies?: string;
  extInfo?: string;
  gender?: string;
  height?: number;
  intro?: string;
  jwtToken?: string;
  mapUuid?: string;
  method?: string;
  mode?: string;
  title?: string;
  tryOnParams?: CreateProjectRequestTryOnParams;
  type?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      autoBuild: 'AutoBuild',
      dependencies: 'Dependencies',
      extInfo: 'ExtInfo',
      gender: 'Gender',
      height: 'Height',
      intro: 'Intro',
      jwtToken: 'JwtToken',
      mapUuid: 'MapUuid',
      method: 'Method',
      mode: 'Mode',
      title: 'Title',
      tryOnParams: 'TryOnParams',
      type: 'Type',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuild: 'boolean',
      dependencies: 'string',
      extInfo: 'string',
      gender: 'string',
      height: 'number',
      intro: 'string',
      jwtToken: 'string',
      mapUuid: 'string',
      method: 'string',
      mode: 'string',
      title: 'string',
      tryOnParams: CreateProjectRequestTryOnParams,
      type: 'string',
      weight: 'number',
    };
  }

  validate() {
    if(this.tryOnParams && typeof (this.tryOnParams as any).validate === 'function') {
      (this.tryOnParams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

