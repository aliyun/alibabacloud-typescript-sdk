// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AITeacherSyncPracticeTaskGenerateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 13
   */
  grade?: string;
  keySentences?: string[];
  keyWords?: string[];
  /**
   * @example
   * Understanding unique professions such as dog walkers, hotel test sleepers, and food tasters, including their job responsibilities and the benefits or challenges associated with each role.
   */
  learningObject?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Dog walker Dog walking, as a profession, originated in the US. Some may think that it\\"s a perfect job, because dog walkers won\\"t be imprisoned in an office. But it\\"s actually manual labour. At their busiest, dog walkers may have more than ten dogs to take care of in a day. Hotel test sleeper A hotel test sleeper, as the name suggests, has to write expert reviews about the facilities, locations, prices, dining and other services of hotels, in order to provide evaluations and guides for travelers. Hotel test sleepers don\\"t need to punch in for work and they get about ten thousand yuan as income every month. What a comfortable job! Food taster In ancient times, a food taster was a person who tasted foods (or drinks) to be served to someone else, to confirm that it was safe to eat. But now, those working as food tasters just get to taste various new foods and drinks aimed at specific regions across the world. They then give their opinions on these products to the companies and suggest improvements.
   */
  textContent?: string;
  textbook?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * talk about your dream job.
   */
  topic?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 6440xxxxxxxxxx5fafc98c421
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      grade: 'grade',
      keySentences: 'keySentences',
      keyWords: 'keyWords',
      learningObject: 'learningObject',
      textContent: 'textContent',
      textbook: 'textbook',
      topic: 'topic',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grade: 'string',
      keySentences: { 'type': 'array', 'itemType': 'string' },
      keyWords: { 'type': 'array', 'itemType': 'string' },
      learningObject: 'string',
      textContent: 'string',
      textbook: 'string',
      topic: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.keySentences)) {
      $dara.Model.validateArray(this.keySentences);
    }
    if(Array.isArray(this.keyWords)) {
      $dara.Model.validateArray(this.keyWords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

