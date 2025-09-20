// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FigureClusterForReqCoverFigures extends $dara.Model {
  figureId?: string;
  static names(): { [key: string]: string } {
    return {
      figureId: 'FigureId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      figureId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FigureClusterForReqCover extends $dara.Model {
  figures?: FigureClusterForReqCoverFigures[];
  static names(): { [key: string]: string } {
    return {
      figures: 'Figures',
    };
  }

  static types(): { [key: string]: any } {
    return {
      figures: { 'type': 'array', 'itemType': FigureClusterForReqCoverFigures },
    };
  }

  validate() {
    if(Array.isArray(this.figures)) {
      $dara.Model.validateArray(this.figures);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FigureClusterForReq extends $dara.Model {
  cover?: FigureClusterForReqCover;
  customId?: string;
  customLabels?: { [key: string]: any };
  metaLockVersion?: number;
  name?: string;
  objectId?: string;
  static names(): { [key: string]: string } {
    return {
      cover: 'Cover',
      customId: 'CustomId',
      customLabels: 'CustomLabels',
      metaLockVersion: 'MetaLockVersion',
      name: 'Name',
      objectId: 'ObjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cover: FigureClusterForReqCover,
      customId: 'string',
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      metaLockVersion: 'number',
      name: 'string',
      objectId: 'string',
    };
  }

  validate() {
    if(this.cover && typeof (this.cover as any).validate === 'function') {
      (this.cover as any).validate();
    }
    if(this.customLabels) {
      $dara.Model.validateMap(this.customLabels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

