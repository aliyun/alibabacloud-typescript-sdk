// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Boundary } from "./Boundary";
import { HeadPose } from "./HeadPose";


export class Figure extends $dara.Model {
  age?: number;
  ageSD?: number;
  attractive?: number;
  beard?: string;
  beardConfidence?: number;
  boundary?: Boundary;
  emotion?: string;
  emotionConfidence?: number;
  faceQuality?: number;
  figureClusterConfidence?: number;
  figureClusterId?: string;
  figureConfidence?: number;
  figureId?: string;
  figureType?: string;
  gender?: string;
  genderConfidence?: number;
  glasses?: string;
  glassesConfidence?: number;
  hat?: string;
  hatConfidence?: number;
  headPose?: HeadPose;
  mask?: string;
  maskConfidence?: number;
  mouth?: string;
  mouthConfidence?: number;
  sharpness?: number;
  static names(): { [key: string]: string } {
    return {
      age: 'Age',
      ageSD: 'AgeSD',
      attractive: 'Attractive',
      beard: 'Beard',
      beardConfidence: 'BeardConfidence',
      boundary: 'Boundary',
      emotion: 'Emotion',
      emotionConfidence: 'EmotionConfidence',
      faceQuality: 'FaceQuality',
      figureClusterConfidence: 'FigureClusterConfidence',
      figureClusterId: 'FigureClusterId',
      figureConfidence: 'FigureConfidence',
      figureId: 'FigureId',
      figureType: 'FigureType',
      gender: 'Gender',
      genderConfidence: 'GenderConfidence',
      glasses: 'Glasses',
      glassesConfidence: 'GlassesConfidence',
      hat: 'Hat',
      hatConfidence: 'HatConfidence',
      headPose: 'HeadPose',
      mask: 'Mask',
      maskConfidence: 'MaskConfidence',
      mouth: 'Mouth',
      mouthConfidence: 'MouthConfidence',
      sharpness: 'Sharpness',
    };
  }

  static types(): { [key: string]: any } {
    return {
      age: 'number',
      ageSD: 'number',
      attractive: 'number',
      beard: 'string',
      beardConfidence: 'number',
      boundary: Boundary,
      emotion: 'string',
      emotionConfidence: 'number',
      faceQuality: 'number',
      figureClusterConfidence: 'number',
      figureClusterId: 'string',
      figureConfidence: 'number',
      figureId: 'string',
      figureType: 'string',
      gender: 'string',
      genderConfidence: 'number',
      glasses: 'string',
      glassesConfidence: 'number',
      hat: 'string',
      hatConfidence: 'number',
      headPose: HeadPose,
      mask: 'string',
      maskConfidence: 'number',
      mouth: 'string',
      mouthConfidence: 'number',
      sharpness: 'number',
    };
  }

  validate() {
    if(this.boundary && typeof (this.boundary as any).validate === 'function') {
      (this.boundary as any).validate();
    }
    if(this.headPose && typeof (this.headPose as any).validate === 'function') {
      (this.headPose as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

